import type { EmilItem } from '../lib/types';

interface Props { item: EmilItem }
export default function EmilRow({ item }: Props) {
  const name = item.active ? item.name : <span className="red">{item.name}</span>;
  return (
    <tr>
      <td>{name}</td>
      <td>{item.updatedAt}</td>
      <td>{item.id}</td>
    </tr>
  );
}
