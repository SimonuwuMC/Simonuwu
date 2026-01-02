import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const MODRINTH_PROJECT_ID = "UqAIdvco";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ModrinthVersion {
  id: string;
  project_id: string;
  version_number: string;
  name: string;
  changelog: string;
  date_published: string;
  downloads: number;
  version_type: string;
  game_versions: string[];
  files: Array<{
    url: string;
    primary: boolean;
  }>;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    console.log("Starting Modrinth version sync...");

    // Fetch project data from Modrinth
    const projectResponse = await fetch(
      `https://api.modrinth.com/v2/project/${MODRINTH_PROJECT_ID}`
    );

    if (!projectResponse.ok) {
      throw new Error("Failed to fetch Modrinth project data");
    }

    const projectData = await projectResponse.json();
    const versionIds = projectData.versions as string[];

    console.log(`Found ${versionIds.length} versions in Modrinth`);

    // Fetch detailed info for each version
    const versionPromises = versionIds.map((versionId) =>
      fetch(`https://api.modrinth.com/v2/version/${versionId}`)
        .then((res) => res.json())
        .catch((err) => {
          console.error(`Failed to fetch version ${versionId}:`, err);
          return null;
        })
    );

    const versions = (await Promise.all(versionPromises)).filter(
      (v) => v !== null
    ) as ModrinthVersion[];

    console.log(`Successfully fetched ${versions.length} version details`);

    // Create Supabase client
    const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!);

    let upsertedCount = 0;
    let errorCount = 0;

    for (const version of versions) {
      const downloadUrl = version.files.find((f) => f.primary)?.url || "";
      const isBeta = version.version_type !== "release";

      const versionData = {
        modrinth_id: version.id,
        version_number: version.version_number,
        name: version.name,
        game_versions: version.game_versions,
        changelog: version.changelog || "",
        download_url: downloadUrl,
        is_beta: isBeta,
        downloads_count: version.downloads,
        date_published: version.date_published,
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase
        .from("modpack_versions")
        .upsert([versionData], { onConflict: "modrinth_id" });

      if (error) {
        console.error(`Failed to upsert version ${version.id}:`, error);
        errorCount++;
      } else {
        upsertedCount++;
      }
    }

    console.log(
      `Sync complete: ${upsertedCount} upserted, ${errorCount} errors`
    );

    return new Response(
      JSON.stringify({
        success: true,
        message: "Version sync completed",
        versionsProcessed: versions.length,
        upsertedCount,
        errorCount,
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Sync error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
