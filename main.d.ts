/**
 * Asynchronously and recursively gets an array of files matching the provided regex in the given directory.
 * @param dirPath Absolute or relative directory path to search.
 * @param filenameRegex Optional. Regex to match filenames. Defaults to /\.m?js$/.
 * @returns Promise that resolves to an array of matching file paths.
 */
export declare function getMatchingFilesAP(
  dirPath: string,
  filenameRegex?: RegExp
): Promise<string[]>;
