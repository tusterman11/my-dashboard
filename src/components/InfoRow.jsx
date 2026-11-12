function InfoRow({ label, value, children }) {
  return (
    <div className="flex w-full min-w-0 items-center justify-between gap-4 py-3">
      <span className="min-w-0 text-sm text-muted">{label}</span>
      <div className="flex shrink-0 items-center gap-3">
        {children}
        {value && <span className="font-bold tabular-nums">{value}</span>}
      </div>
    </div>
  );
}

export default InfoRow;
