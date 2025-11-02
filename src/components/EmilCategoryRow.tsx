interface Props { category: string }
export default function EmilCategoryRow({ category }: Props) {
  return (
    <tr>
      <th colSpan={3} className="category">{category}</th>
    </tr>
  );
}
