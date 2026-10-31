import type { Question } from "@/entities/question";
import { QuestionCard } from "@/entities/question";
import { Pagination } from "@/shared/ui/pagination";
import {
  useFindQuestionsByKeywordQuery,
  useGetPublicQuestionsQuery,
} from "@/entities/question"
import { useSearchParams } from "react-router-dom";
import "./Content.css";

export function Content({ page }: { page: number }) {
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("q") || "";

  const {
    data: publicQuestions,
    isFetching: isPublicFetching,
    error: publicError,
  } = useGetPublicQuestionsQuery(page, {
    skip: Boolean(searchValue),
  });

  const {
    data: searchQuestions,
    isFetching: isSearchFetching,
    error: searchError,
  } = useFindQuestionsByKeywordQuery(
    { page, title: searchValue },
    {
      skip: Boolean(!searchValue),
    }
  );

  const isFetching = isPublicFetching || isSearchFetching;
  const questions = searchValue ? searchQuestions : publicQuestions;

  const error = publicError || searchError;

  return (
    <div className="main_content">
      <h3>Вопросы React Frontend Developer</h3>
      <hr className="main_hr" />
      {isFetching && <h3>Загрузка...</h3>}
      {error && <h3>Ошибка загрузки вопросов</h3>}
      {questions?.length === 0 && <h3>Таких вопросов нет</h3>}

      <ul>
        {questions?.map((question: Question) => (
          <QuestionCard key={question.id} question={question} />
        ))}
      </ul>
      <Pagination />
    </div>
  );
}
