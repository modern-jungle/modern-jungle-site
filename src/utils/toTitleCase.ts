export function toTitleCase(text: string) {
  return text.replace(
    /\w\S*/g,
    x => x.charAt(0).toUpperCase() + x.substr(1).toLowerCase()
  );
}
