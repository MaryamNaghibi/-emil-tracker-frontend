export type SortBy = 'name' | 'updatedAt' | 'id';
export type SortDir = 'asc' | 'desc';

export function compareValues(a: string | number | Date, b: string | number | Date, dir: SortDir) {
  const av = a instanceof Date ? a.getTime() : a;
  const bv = b instanceof Date ? b.getTime() : b;
  if (av < bv) return dir === 'asc' ? -1 : 1;
  if (av > bv) return dir === 'asc' ? 1 : -1;
  return 0;
}