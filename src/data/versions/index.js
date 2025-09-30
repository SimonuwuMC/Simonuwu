import { minecraft1217 } from './minecraft-1.21.7';
import { minecraft1216 } from './minecraft-1.21.6';
import { minecraft1215 } from './minecraft-1.21.5';
import { minecraft1214 } from './minecraft-1.21.4';
import { minecraft1213 } from './minecraft-1.21.3';
import { minecraft1211 } from './minecraft-1.21.1';
import { minecraft1210 } from './minecraft-1.21.0';
import { minecraft1204 } from './minecraft-1.20.4';
import { minecraft1202 } from './minecraft-1.20.2';
import { minecraft1201 } from './minecraft-1.20.1';
import { minecraft1194 } from './minecraft-1.19.4';
import { minecraft1182 } from './minecraft-1.18.2';
import { minecraft1218 } from './minecraft-1.21.8';
import { minecraft1219 } from './minecraft-1.21.9';

// Export all versions as an array in correct chronological order
export const allVersions = [
  minecraft1219,
  minecraft1218,
  minecraft1217,
  minecraft1216,
  minecraft1215,
  minecraft1214,
  minecraft1213,
  minecraft1211,
  minecraft1210,
  minecraft1204,
  minecraft1202,
  minecraft1201,
  minecraft1194,
  minecraft1182
];

// Export individual versions
export {
  minecraft1219,
  minecraft1218,
  minecraft1217,
  minecraft1216,
  minecraft1215,
  minecraft1214,
  minecraft1213,
  minecraft1211,
  minecraft1210,
  minecraft1204,
  minecraft1202,
  minecraft1201,
  minecraft1194,
  minecraft1182
};

// Helper function to get version data by version string
export const getVersionData = (versionString) => {
  return allVersions.find(v => v.version === versionString);
};

// Helper function to get sorted versions (newest first)
export const getSortedVersions = () => {
  return allVersions.sort((a, b) => {
    const [aMajor, aMinor, aPatch] = a.version.split('.').map(Number);
    const [bMajor, bMinor, bPatch] = b.version.split('.').map(Number);
    
    if (aMajor !== bMajor) return bMajor - aMajor;
    if (aMinor !== bMinor) return bMinor - aMinor;
    return (bPatch || 0) - (aPatch || 0);
  });
};

// Helper function to get all available version strings
export const getVersionStrings = () => {
  return getSortedVersions().map(v => v.version);
};