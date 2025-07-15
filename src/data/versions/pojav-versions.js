// Pojav Launcher specific versions
export const pojavVersions = [
  {
    version: '1.21.5',
    title: 'Spring to Life - Pojav Edition',
    image: 'https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/game-updates/MCV_SpringDrop_DotNet_Blog_Editorial_1280x720.jpg',
    releases: [
      {
        id: "pojav-1215-101",
        version: "1.0.1",
        date: "Dec 15, 2024",
        changelog: "Primera versión optimizada para Pojav Launcher - Minecraft 1.21.5",
        downloadUrl: "https://modrinth.com/modpack/simonuwu-fabric-project-for-pojav/version/1.0.1-1.21.5",
        isBeta: false
      }
    ]
  }
];

// Helper functions for Pojav versions
export const getPojavVersionData = (versionString) => {
  return pojavVersions.find(v => v.version === versionString);
};

export const getSortedPojavVersions = () => {
  return pojavVersions.sort((a, b) => {
    const [aMajor, aMinor, aPatch] = a.version.split('.').map(Number);
    const [bMajor, bMinor, bPatch] = b.version.split('.').map(Number);
    
    if (aMajor !== bMajor) return bMajor - aMajor;
    if (aMinor !== bMinor) return bMinor - aMinor;
    return (bPatch || 0) - (aPatch || 0);
  });
};

export const getPojavVersionStrings = () => {
  return getSortedPojavVersions().map(v => v.version);
};