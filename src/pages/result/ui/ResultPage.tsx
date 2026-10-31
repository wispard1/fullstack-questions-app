import { useDispatch, useSelector } from "react-redux";
import type { QuizState } from "@/features/quiz";
import { useSubmitQuizResultMutation, resetQuiz } from "@/features/quiz";
import { useNavigate } from "react-router-dom";
import { MainButton } from "@/shared/ui/main-button";
import "./ResultPage.css";

export function ResultPage() {
  const quizProgress = useSelector(
    (state: { quiz: QuizState }) => state.quiz
  );

  const [, { isLoading, error }] = useSubmitQuizResultMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (isLoading)
    return <div className="result__status">Загрузка результатов...</div>;
  if (error)
    return (
      <div className="result__status error">Ошибка загрузки данных</div>
    );

  return (
    <div className="result__page-wrapper">
      <div className="result__card">
        <div className="result__icon">🏆</div>
        <h1 className="result__title">Квиз завершен!</h1>

        <div className="result__score-box">
          <span className="result__score-label">Вы набрали</span>
          <span className="result__score-value">{quizProgress.score}</span>
          <span className="result__score-total">баллов</span>
        </div>

        <MainButton
          text="Пройти квиз заново"
          handleStart={() => {
            dispatch(resetQuiz());
            navigate("/quizLobby");
          }}
        />
      </div>
    </div>
  );
}

export default ResultPage;