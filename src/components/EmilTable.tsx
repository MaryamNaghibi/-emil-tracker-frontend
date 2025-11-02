import EmilCategoryRow from './EmilCategoryRow';
import EmilRow from './EmilRow';
import type { EmilItem } from '../lib/types';
import type { JSX } from 'react';

interface Props {
  items: EmilItem[];
  filterText: string;
  onlyActive: boolean;
}

function highlight(name: string, q: string): JSX.Element | string {
  const s = q.trim();
  if (!s) return name;
  const re = new RegExp(`(${s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'ig');
  const parts = name.split(re);
  return (
    <>
      {parts.map((p, i) =>
        re.test(p) ? <mark key={i}>{p}</mark> : <span key={i}>{p}</span>
      )}
    </>
  );
}

export default function EmilTable({ items, filterText, onlyActive }: Props) {
  const rows: JSX.Element[] = [];
  let lastCategory: string | null = null;
  const q = filterText.trim().toLowerCase();
  let visibleCount = 0;

  items.forEach((item) => {
    if (q && !item.name.toLowerCase().includes(q)) return;
    if (onlyActive && !item.active) return;

    if (item.category !== lastCategory) {
      rows.push(<EmilCategoryRow category={item.category} key={item.category} />);
      lastCategory = item.category;
    }
    visibleCount++;
    rows.push(
      <EmilRow
        item={{ ...item, name: highlight(item.name, filterText) as unknown as string }}
        key={`${item.category}:${item.id}`}
      />
    );
  });

  return (
    <table className="table" role="table">
      <caption className="muted">{visibleCount} result{visibleCount === 1 ? '' : 's'}</caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Updated</th>
          <th>ID</th>
        </tr>
      </thead>
      <tbody>
        {visibleCount === 0 ? (
          <tr><td colSpan={3} className="muted">No results</td></tr>
        ) : (
          rows
        )}
      </tbody>
    </table>
  );
}