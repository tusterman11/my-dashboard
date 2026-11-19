function ListItem({ title, year, genre }) {
  return (
    <li
      className="flex flex-wrap items-center justify-between gap-2
        border-b border-border py-3"
    >
      <div>
        <p className="font-bold">{title}</p>
        <p className="text-sm text-primary">{genre}</p>
        <p className="text-sm text-muted">{year}</p>
      </div>
    </li>
  );
}

export default ListItem;
