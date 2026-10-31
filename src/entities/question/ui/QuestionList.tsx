import { QuestionCard } from "./QuestionCard";
import type { Question } from "../model";

export function QuestionList({
  questions,
}: {
  questions: Array<Question>;
}) {
  return (
    <>
      {questions.map((question) => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </>
  );
}
