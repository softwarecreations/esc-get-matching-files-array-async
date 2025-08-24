import fsP from 'node:fs/promises';
import path from 'node:path';

export const getMatchingFilesAP = async (dirPath, filenameRegex = /\.m?js$/) => {
  const filesA = await fsP.readdir( dirPath, { withFileTypes: true } );
  return ( await Promise.all( filesA.map( async fileO => {
    const absPath = path.join( dirPath, fileO.name );
    return fileO.isDirectory() ? await getMatchingFilesAP( absPath, filenameRegex ) : ( filenameRegex.test( fileO.name ) ? [ absPath ] : [] );
  } ) ) ).flat();
};

export default getMatchingFilesAP;
