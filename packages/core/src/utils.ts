let counter = 0;

export function createId() {
  counter += 1;
  return `flashify-${Date.now()}-${counter}`;
}
