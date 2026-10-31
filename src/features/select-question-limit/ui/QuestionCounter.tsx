import "./QuestionCounter.css";
import type { QuestionCounterProps } from "../model/types";

export function QuestionCounter({
  count,
  setCount,
  min = 1,
  max = 50,
}: QuestionCounterProps) {
  return (
    <div className="wrapper">
      <span className="label">Количество вопросов</span>
      <div className="stepper">
        <button
          type="button"
          className="button"
          onClick={() => setCount(count - 1)}
          disabled={count <= min}
        >
          −
        </button>

        <span className="value">{count}</span>

        <button
          type="button"
          className="button"
          onClick={() => setCount(count + 1)}
          disabled={count >= max}
        >
          +
        </button>
      </div>
    </div>
  );
}
