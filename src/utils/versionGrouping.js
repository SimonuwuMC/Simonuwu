import { getSortedVersions } from '../data/versions';

export const groupVersionsByGeneration = () => {
  const sortedVersions = getSortedVersions();

  const groups = {
    '26.x': { name: 'Minecraft 26.x - Tiny Takeover', versions: [], color: 'red' },
    '1.21.x': { name: 'Minecraft 1.21.x', versions: [], color: 'blue' },
    '1.20.x': { name: 'Minecraft 1.20.x', versions: [], color: 'emerald' },
    '1.19.x': { name: 'Minecraft 1.19.x', versions: [], color: 'teal' },
    '1.18.x': { name: 'Minecraft 1.18.x', versions: [], color: 'cyan' },
  };

  sortedVersions.forEach(version => {
    if (version.startsWith('26.')) {
      groups['26.x'].versions.push(version);
    } else if (version.startsWith('1.21.')) {
      groups['1.21.x'].versions.push(version);
    } else if (version.startsWith('1.20.')) {
      groups['1.20.x'].versions.push(version);
    } else if (version.startsWith('1.19.')) {
      groups['1.19.x'].versions.push(version);
    } else if (version.startsWith('1.18.')) {
      groups['1.18.x'].versions.push(version);
    }
  });

  return Object.entries(groups)
    .filter(([_, group]) => group.versions.length > 0)
    .map(([id, group]) => ({
      id,
      ...group
    }));
};
