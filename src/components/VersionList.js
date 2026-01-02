import React, { useState, useEffect } from 'react';
import VersionCard from './VersionCard';
import { getAllVersions } from '../services/versionsService';

const VersionList = () => {
  const [activeTab, setActiveTab] = useState('stable');
  const [versions, setVersions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVersions = async () => {
      setLoading(true);
      const allVersions = await getAllVersions();
      setVersions(allVersions);
      setLoading(false);
    };

    fetchVersions();
  }, []);

  const stableVersions = versions.filter(v => !v.is_beta);
  const betaVersions = versions.filter(v => v.is_beta);

  const formatVersion = (dbVersion) => ({
    version: dbVersion.version_number,
    date: new Date(dbVersion.date_published).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }),
    changelog: dbVersion.changelog,
    downloadUrl: dbVersion.download_url,
    isBeta: dbVersion.is_beta
  });

  return (
    <div className="max-w-4xl mx-auto">
      {/* <DownloadTabs activeTab={activeTab} setActiveTab={setActiveTab} /> */}

      <div className="space-y-4">
        {loading ? (
          <div className="text-center py-8">Cargando versiones...</div>
        ) : activeTab === 'stable' ? (
          stableVersions.length > 0 ? (
            stableVersions.map((version) => (
              <VersionCard key={version.modrinth_id} {...formatVersion(version)} />
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">No hay versiones estables disponibles</div>
          )
        ) : (
          betaVersions.length > 0 ? (
            betaVersions.map((version) => (
              <VersionCard key={version.modrinth_id} {...formatVersion(version)} />
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">No hay versiones beta disponibles</div>
          )
        )}
      </div>
    </div>
  );
};

export default VersionList;