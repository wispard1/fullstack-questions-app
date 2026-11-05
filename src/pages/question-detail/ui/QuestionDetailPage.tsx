import { useNavigate, useParams } from "react-router-dom";
import { HTMLSection } from "@/shared/ui/html-section";
import { QuestionMeta } from "@/entities/question";
import { FilterButton } from "@/shared/ui/filter-button";
import { SiderTitle } from "@/shared/ui/sider-title";
import "./QuestionDetailedPage.css";
import { useFetchQuestionByIdQuery } from "@/entities/question";

export function QuestionDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const questionId = Number(id);

  const { data: question, isLoading } = useFetchQuestionByIdQuery(
    questionId,
    {
      skip: isNaN(questionId),
    }
  );

  if (isLoading) {
    return <p>Загрузка...</p>;
  }

  if (!question) {
    return <h1>Ошибка сервера</h1>;
  }

  return (
    <>
      <div className="flex">
        <div>
          <button onClick={() => navigate(-1)} className="btn_back">
            Назад
          </button>
        </div>

        <div className="flex_container">
          <div className="main_container">
            <div className="question_container ">
              <h2>{question.title}</h2>
              <p>{question.description}</p>
            </div>
            <HTMLSection
              title="Краткий ответ"
              html={question.shortAnswer}
            />
            <HTMLSection
              title="Длинный ответ"
              html={question.longAnswer}
            />
          </div>
          <div className="sider">
            <SiderTitle title="Уровень" />
            <QuestionMeta
              rate={question.rate}
              complexity={question.complexity}
            />
            <SiderTitle title="Навыки" />
            {question.questionSkills && (
              <FilterButton
                title={question.questionSkills[0].title}
                active={true}
              />
            )}
            <SiderTitle title="Ключевые слова" />
            <div className="keywords_container">
              {question.keywords &&
                question.keywords.map((keyword) => (
                  <p key={keyword} className="keyword">
                    #{keyword}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuestionDetailPage;
