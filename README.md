# esc-get-matching-files-array-async

An **async** function that returns an array of files matching a regex pattern, searched recursively in a given directory.

## Want sync version?

[esc-get-matching-files-array](https://www.npmjs.com/package/esc-get-matching-files-array)

## Features

- **No dependencies**
- **Stable API**
- **Simple**
- **Small: 498 bytes, 6 lines of code**
- **Easy to audit**
- **Promise-based async**

No breaking changes—major changes will result in a new package.

## Inspired by

- `glob`

The problems with glob are (as of 2025-08-15)

* 6 Dependencies
* 475KiB of code. What the actual fuck?
* Slow in some situations
* Hard to audit and trust
* Over-complicated
* Subject to change

## Installation

```bash
npm install esc-get-matching-files-array-async
```

## Usage

```js
import { getMatchingFilesAP } from 'esc-get-matching-files-array-async';

const filesA = await getMatchingFilesAP('/some/path', /\.js$/);
console.log(filesA);
```

## API

### `getMatchingFilesAP(dirPath: string, filenameRegex?: RegExp): Promise<string[]>`

- **dirPath** (string): Directory to start from.
- **filenameRegex** (optional RegExp): Pattern to match filenames. Default: `/\.m?js$/`.

Returns a promise that resolves to an array of absolute file paths matching the pattern.

## License

MIT

---

:star: Star the repo:  
https://github.com/softwarecreations/esc-get-matching-files-array-async

PRs & issues welcome! 

Have fun!
