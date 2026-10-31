import { QuestionCard } from "./QuestionCard";
import type { Question } from "../model";

export function QuestionList({
  questions,
}: {
  questions: Array<Question>;
}) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {questions.map((question) => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </ul>
  );
}
