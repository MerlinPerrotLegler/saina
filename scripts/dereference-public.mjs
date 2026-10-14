import { cp, readdir, rm, stat } from "node:fs/promises";
import { join } from "node:path";

/**
 * Nitro copies public/ with fs.cp, which keeps file symlinks.
 * Their relative targets break once the link lives in .output/public.
 * Replace those links in the build output with the file they point to.
 */
export async function dereferencePublicSymlinks(srcDir, dstDir) {
  const entries = await readdir(srcDir, { withFileTypes: true });
  await Promise.all(entries.map((entry) => materialize(srcDir, dstDir, entry)));
}

async function materialize(srcDir, dstDir, entry) {
  const src = join(srcDir, entry.name);
  const dst = join(dstDir, entry.name);
  if (entry.isSymbolicLink()) {
    const followed = await stat(src);
    if (followed.isDirectory()) return;
    await rm(dst, { force: true });
    await cp(src, dst, { dereference: true });
    return;
  }
  if (entry.isDirectory()) await dereferencePublicSymlinks(src, dst);
}
