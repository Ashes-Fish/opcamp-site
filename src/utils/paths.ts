/**
 * Get image path with correct base URL for GitHub Pages deployment.
 * Use this for all image src attributes instead of hardcoded `/images/...`
 */
export function img(path: string): string {
  const base = import.meta.env.BASE_URL
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${base}${cleanPath}`
}
