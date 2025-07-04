export function checkHeading(str) {
  return /^(\*)(\*)(.*)\*$/.test(str);
}
export function replaceHeadingStars(str) {
  // Remove leading '**' and optional trailing '*' from the heading
  return str.replace(/^\*\*(.*)\*$/, '$1');
}
