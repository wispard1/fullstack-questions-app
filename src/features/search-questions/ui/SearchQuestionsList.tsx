import { useSearchParams } from "react-router-dom";
import { useFindQuestionsByKeywordQuery } from "@/entities/question/api/questionsApi";
import { QuestionList } from "@/entities/question";

export function SearchQuestionsList() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const page = Number(searchParams.get("page")) || 1;

  const { data: response, isLoading } = useFindQuestionsByKeywordQuery(
    {
      page,
      title: query,
    },
    {
      skip: query === "",
    }
  );

  if (isLoading) return <div>Загрузка...</div>;
  if (query === "") return <div>Введите слово для поиска</div>;
  
  const questions = response?.data || [];

  if (questions.length === 0)
    return <div>По вашему запросу ничего не найдено</div>;

  return <QuestionList questions={questions} />;
}