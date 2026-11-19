function ListFilter({
  options,
  activeFilter,
  onFilterChange,
  searchTerm,
  onSearchChange,
  resultCount,
  itemLabel = 'álbum',
}) {
  return (
    <div className="mb-5 flex flex-col gap-3 border-b border-border pb-5">
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter itens by era"
      >
        {options.map((option) => {
          const isActive = activeFilter === option.value;

          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={isActive}
              onClick={() => onFilterChange(option.value)}
              className={`rounded-lg border px-3 py-2 text-sm font-bold transition-colors ${
                isActive
                  ? 'border-primary bg-primary text-background'
                  : 'border-border text-muted hover:border-primary hover:text-primary'
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <label className="flex flex-col gap-2 text-sm text-muted">
        Buscar {itemLabel}
        <input
          type="search"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Title or year"
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground outline-none focus:border-primary"
        />
      </label>

      <p className="text-sm text-muted" aria-live="polite">
        {resultCount}{' '}
        {resultCount === 1 ? `${itemLabel} found` : `${itemLabel}s found`}
      </p>
    </div>
  );
}

export default ListFilter;
