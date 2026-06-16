// Link rewriter for compiled library output.
//
// When a compiler copies markdown from a library source file to a compiled
// output file at a different location, all relative links must be rewritten
// so they resolve to the same targets from the new location.
//
// Usage:
//   import { rewriteLinks } from './07-on-compiled-links--rewriter';
//   const rewritten = rewriteLinks(body, sourceDir, outputDir);
//
// sourceDir: the absolute directory of the library source file
// outputDir: the absolute directory of the compiled output file
//
// Handles both inline links [text](path) and citation definitions [ref]: path.
// Skips absolute URLs, fragment-only links, and non-file URIs.

import { resolve, relative, dirname } from 'path';

function isRelativePath(p: string): boolean {
  if (!p) return false;
  if (p.startsWith('#')) return false;
  if (/^[a-z][a-z0-9+.-]*:/i.test(p)) return false;
  if (p.startsWith('/')) return false;
  return true;
}

function rewritePath(linkPath: string, sourceDir: string, outputDir: string): string {
  const [pathPart, fragment] = linkPath.split('#', 2);
  if (!pathPart || !isRelativePath(pathPart)) return linkPath;

  const absoluteTarget = resolve(sourceDir, pathPart);
  let newRelative = relative(outputDir, absoluteTarget).replace(/\\/g, '/');

  if (!newRelative.startsWith('.')) {
    newRelative = './' + newRelative;
  }

  return fragment ? newRelative + '#' + fragment : newRelative;
}

export function rewriteLinks(body: string, sourceDir: string, outputDir: string): string {
  const srcDir = resolve(sourceDir);
  const outDir = resolve(outputDir);

  if (srcDir === outDir) return body;

  // Inline links: [text](path) — rewrite the path inside parens
  let result = body.replace(
    /\]\(([^)]+)\)/g,
    (match, dest: string) => {
      const rewritten = rewritePath(dest, srcDir, outDir);
      return `](${rewritten})`;
    }
  );

  // Citation definitions: [ref]: path — rewrite the path after ": "
  result = result.replace(
    /^(\[[^\]]+\]):\s*(.+)$/gm,
    (match, ref: string, dest: string) => {
      const trimmed = dest.trim();
      const rewritten = rewritePath(trimmed, srcDir, outDir);
      return `${ref}: ${rewritten}`;
    }
  );

  return result;
}
