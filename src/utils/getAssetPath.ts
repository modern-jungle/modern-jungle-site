import { buildUrl } from "./buildUrl";

export function getAssetPath(url: string) {
  if (/^https?/.test(url)) {
    return url;
  }
  return buildUrl(process.env.API_URL, url);
}
