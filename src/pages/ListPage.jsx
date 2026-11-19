import { useState } from 'react';
import Menu from '../components/Menu.jsx';
import Panel from '../components/Panel.jsx';
import ListItem from '../components/ListItem.jsx';
import { useOpeth } from '../context/OpethContext';

const filterOptions = [
  { label: 'All', value: 'all' },
  { label: '1990s', value: '1990s' },
  { label: '2000s', value: '2000s' },
  { label: '2010s+', value: '2010s+' },
];

function ListPage() {
  const { opeth } = useOpeth();
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const visibleRecords = opeth.filter((record) => {
    const matchesFilter = activeFilter === 'all' || record.era === activeFilter;
    const query = searchTerm.trim().toLowerCase();
    const matchesSearch =
      query === '' ||
      record.title.toLowerCase().includes(query) ||
      record.year.includes(query);

    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <Menu />
      <Panel
        id="discography"
        title="Discografia"
        className="md:col-span-2 xl:col-span-2"
      >
        <div className="mb-5 flex flex-col gap-3 border-b border-border pb-5">
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter albums by decade"
          >
            {filterOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                aria-pressed={activeFilter === option.value}
                onClick={() => setActiveFilter(option.value)}
                className={`rounded-lg border px-3 py-2 text-sm font-bold ${
                  activeFilter === option.value
                    ? 'border-primary bg-primary text-background'
                    : 'border-border text-muted hover:border-primary hover:text-primary'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          <label className="flex flex-col gap-2 text-sm text-muted">
            Search records
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Title or year"
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground outline-none focus:border-primary"
            />
          </label>

          <p className="text-sm text-muted" aria-live="polite">
            {visibleRecords.length}{' '}
            {visibleRecords.length === 1 ? 'record found' : 'records found'}
          </p>
        </div>

        {visibleRecords.length > 0 ? (
          <ul>
            {visibleRecords.map((record) => (
              <ListItem
                key={record.id}
                title={record.title}
                year={record.year}
                genre={record.genre}
              />
            ))}
          </ul>
        ) : (
          <p className="py-8 text-center text-muted">
            Nenhum álbum encontrado.
          </p>
        )}
      </Panel>
    </>
  );
}

export default ListPage;
