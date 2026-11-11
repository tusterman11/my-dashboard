function InfoRow({ label, value }) {
  return (
    <p className="flex justify-between gap-4">
      <span className="text-muted ">{label}</span>
      <span className="font-bold">{value}</span>
    </p>
  );
}

export default InfoRow;
