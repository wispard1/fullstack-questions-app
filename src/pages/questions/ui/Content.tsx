import type { Question } from "@/entities/question";
import { QuestionCard } from "@/entities/question";
import { Pagination } from "@/shared/ui/pagination";
import {
  useFindQuestionsByKeywordQuery,
  useGetPublicQuestionsQuery,
} from "@/entities/question";
import "./Content.css";

interface ContentProps {
  page: number;
  searchValue: string;
  filters: {
    specializationId: string;
    skills: string[];
    complexity: string;
    rate: string;
  };
}

export function Content({ page, searchValue, filters }: ContentProps) {
  const isSearching = Boolean(searchValue.trim());

  const {
    data: publicData,
    isFetching: isPublicFetching,
    error: publicError,
  } = useGetPublicQuestionsQuery(
    {
      page,
      specializationId: filters.specializationId,
      skills: filters.skills,
      complexity: filters.complexity,
      rate: filters.rate,
    },
    { skip: isSearching }
  );

  const {
    data: searchData,
    isFetching: isSearchFetching,
    error: searchError,
  } = useFindQuestionsByKeywordQuery(
    {
      page,
      title: searchValue,
      specializationId: filters.specializationId,
      skills: filters.skills,
      complexity: filters.complexity,
      rate: filters.rate,
    },
    { skip: !isSearching }
  );

  const isFetching = isPublicFetching || isSearchFetching;
  const error = publicError || searchError;
  const questions = (isSearching ? searchData : publicData)?.data || [];

  return (
    <div className="main_content">
      <h3>Вопросы React Frontend Developer</h3>
      <hr className="main_hr" />

      {isFetching && <h3>Загрузка...</h3>}
      {error && <h3>Ошибка загрузки вопросов</h3>}
      {!isFetching && !error && questions.length === 0 && (
        <h3>Таких вопросов нет</h3>
      )}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {questions.map((question: Question) => (
          <QuestionCard key={question.id} question={question} />
        ))}
      </ul>
      <Pagination />
    </div>
  );
}
