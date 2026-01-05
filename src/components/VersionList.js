import React, { useState } from 'react';
import VersionCard from './VersionCard';
import { stableVersions, betaVersions } from '../mock/versions';

const VersionList = () => {
  const [activeTab, setActiveTab] = useState('stable');

  return (
    <div className="max-w-4xl mx-auto">
      <DownloadTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="space-y-4">
        {activeTab === 'stable' ? (
          stableVersions.map((version) => (
            <VersionCard key={version.version} {...version} />
          ))
        ) : (
          betaVersions.map((version) => (
            <VersionCard key={version.version} {...version} />
          ))
        )}
      </div>
    </div>
  );
};

export default VersionList;