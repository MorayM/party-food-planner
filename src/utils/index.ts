const es = ['x', 'ch', 'sh'];

export function pluralize(str: string, quantity: number) {
  if (quantity === 1) return str;
  if (str.endsWith('y')) return `${str.slice(0, -1)}ies`;
  if (es.find((x) => str.endsWith(x))) return `${str}es`;
  return `${str}s`;
}
