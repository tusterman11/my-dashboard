function Header() {
  return (
    <header
      className="flex flex-col gap-2 border-b-8 border-primary bg-surface px-4 py-6 text-primary
        md:flex-row md:items-baseline md:justify-between md:px-8"
    >
      <h1 className="font-heading text-2xl font-bold md:text-3xl">
        Opeth Archive
      </h1>
      <p className="text-muted">Placeholder</p>
    </header>
  );
}

export default Header;
