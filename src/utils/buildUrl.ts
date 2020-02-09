export function trimSlashes(x: string) {
  return x.replace(/\/$/, "").replace(/^\//, "");
}

export function buildUrl(...segments: string[]) {
  return segments.map(trimSlashes).join("/");
}
