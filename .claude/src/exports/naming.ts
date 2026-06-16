// Naming — creates stable, readable filenames from titles and dates.

const KNOWN_EXTENSIONS = new Set([
  'ts', 'tsx', 'js', 'jsx', 'json', 'html', 'css', 'md', 'txt',
  'py', 'rs', 'go', 'java', 'c', 'cpp', 'h', 'hpp', 'rb', 'php',
  'yaml', 'yml', 'toml', 'xml', 'svg', 'csv', 'sql', 'sh', 'bat',
  'pdf', 'png', 'jpg', 'jpeg', 'gif', 'webp', 'ico',
]);

export function fileExtension(filename: string): string {
  const lastDot = filename.lastIndexOf('.');
  if (lastDot < 1) return '';
  const ext = filename.substring(lastDot + 1).toLowerCase();
  return KNOWN_EXTENSIONS.has(ext) ? `.${ext}` : '';
}

export function toFilename(text: string): string {
  const cleaned = text
    .toLowerCase()
    .replace(/[<>:"/\\|?*']/g, '')  // remove Windows-illegal + apostrophes
    .replace(/\s+/g, '-')           // spaces to hyphens
    .replace(/-+/g, '-')            // collapse hyphens
    .replace(/^-|-$/g, '')          // trim leading/trailing hyphens
    .substring(0, 120);
  return cleaned || 'untitled';
}

export function safeFilename(name: string): string {
  return name.replace(/[<>:"/\\|?*]/g, '_').substring(0, 200);
}

export function dateOf(isoTimestamp: string): string {
  return isoTimestamp.substring(0, 10);
}

export function datedFilename(isoTimestamp: string, title: string): string {
  return `${dateOf(isoTimestamp)}-${toFilename(title || 'untitled')}`;
}
