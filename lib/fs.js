const { mkdir, readDir, writeFile, writeTextFile } = Deno;

/**
 * Read the directory's contents.
 *
 * ```js
 * for await (const filePath of readDirRecursive("path")) {
 *   // ...
 * }
 * ```
 *
 * @param {string | URL} path
 * @returns {AsyncGenerator<string>}
 */
export async function* readDirRecursive(path) {
  for await (const dirEntry of readDir(path)) {
    const filePath = `${path}/${dirEntry.name}`;
    if (dirEntry.isFile) {
      yield filePath;
    } else {
      yield* readDirRecursive(filePath);
    }
  }
}

/**
 * Write to the specified path. Creates directories if the path does not exist.
 *
 * ```js
 * await write("this/path/does/not/exist/hello.txt", data);
 * ```
 *
 * @param {string | URL} path
 * @param {Uint8Array | ReadableStream<Uint8Array>} data
 * @param {Deno.WriteFileOptions} [options]
 */
export async function write(path, data, options) {
  await mkdir(path.substring(0, path.lastIndexOf("/")), { recursive: true });
  await writeFile(path, data, options);
}

/**
 * Write to the specified path. Creates directories if the path does not exist.
 *
 * ```js
 * await writeText("this/path/does/not/exist/hello.txt", data);
 * ```
 *
 * @param {string | URL} path
 * @param {string | ReadableStream<string>} data
 * @param {Deno.WriteFileOptions} [options]
 */
export async function writeText(path, data, options) {
  await mkdir(path.substring(0, path.lastIndexOf("/")), { recursive: true });
  await writeTextFile(path, data, options);
}
