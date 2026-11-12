function StatusBadge({ label, isActive = false }) {
  const colorClass = isActive
    ? 'border-primary bg-primary text-background'
    : 'border-border text-muted';

  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full border px-2.5 py-1 text-xs font-bold leading-none ${colorClass}`}
    >
      {label}
    </span>
  );
}

export default StatusBadge;
