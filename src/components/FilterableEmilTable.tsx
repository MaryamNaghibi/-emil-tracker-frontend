import { useState } from 'react';
import SearchBar from './SearchBar';
import EmilTable from './EmilTable';
import type { EmilItem } from '../lib/types';

interface Props { items: EmilItem[] }

export default function FilterableEmilTable({ items }: Props) {
  // کمینهٔ state اپ
  const [filterText, setFilterText] = useState<string>('');
  const [onlyActive, setOnlyActive] = useState<boolean>(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        onlyActive={onlyActive}
        onFilterTextChange={setFilterText}
        onOnlyActiveChange={setOnlyActive}
      />
      <EmilTable
        items={items}
        filterText={filterText}
        onlyActive={onlyActive}
      />
    </div>
  );
}