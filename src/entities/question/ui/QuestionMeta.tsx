import { Property } from "@/shared/ui/property";
import "./QuestionMeta.css";

export function QuestionMeta({
  rate,
  complexity,
}: {
  rate: number;
  complexity: number;
}) {
  return (
    <div className="container_props">
      <Property label="Рейтинг" value={rate} />
      <Property label="Сложность" value={complexity} />
    </div>
  );
}
