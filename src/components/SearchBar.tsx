interface Props {
  filterText: string;
  onlyActive: boolean;
  onFilterTextChange: (value: string) => void;
  onOnlyActiveChange: (value: boolean) => void;
}

export default function SearchBar({
  filterText, onlyActive, onFilterTextChange, onOnlyActiveChange,
}: Props) {
  return (
    <form className="searchbar" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
        aria-label="Search items"
      />
      <label>
        <input
          type="checkbox"
          checked={onlyActive}
          onChange={(e) => onOnlyActiveChange(e.target.checked)}
        />
        Only show active items
      </label>
      <button
        type="button"
        onClick={() => { onFilterTextChange(''); onOnlyActiveChange(false); }}
      >
        Reset
      </button>
    </form>
  );
}
