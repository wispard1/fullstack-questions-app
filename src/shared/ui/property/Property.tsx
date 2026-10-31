import "./Property.css";

export function Property({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <span className="property">
      {label}: <span className="property_line">{value}</span>
    </span>
  );
}
