import FilterableEmilTable from './components/FilterableEmilTable';
import { EMIL_ITEMS } from './lib/data';

export default function App() {
  return (
    <div className="container">
      <h1>Emil Tracker</h1>
      <FilterableEmilTable items={EMIL_ITEMS} />
    </div>
  );
}
