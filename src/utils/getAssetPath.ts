import { buildUrl } from "./buildUrl";

export function getAssetPath(url: string) {
  return buildUrl(process.env.API_URL, url);
}
