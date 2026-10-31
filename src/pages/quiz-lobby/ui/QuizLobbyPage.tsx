import { useDispatch, useSelector } from "react-redux";
import { CollapsibleList } from "@/shared/ui/collapsible-list";
import { useGetSkillsQuery } from "@/entities/skill";
import { useGetSpecsQuery } from "@/entities/specialization";
import { complexity } from "@/shared/config";
import { QuestionCounter } from "@/features/select-question-limit";
import { MainButton } from "@/shared/ui/main-button";
import {
  setComplexity,
  setQtyQuestions,
  setSkills,
  setSpec,
  type QuizConfigState,
} from "@/features/quiz";
import { useNavigate } from "react-router-dom";

export function QuizLobbyPage() {
  const { data: specs = [] } = useGetSpecsQuery();
  const { data: skills = [] } = useGetSkillsQuery();
  const navigate = useNavigate();

  const state = useSelector(
    (state: { quizConfig: QuizConfigState }) => state.quizConfig
  );
  const dispatch = useDispatch();

  function handleStartQuiz() {
    if (!state.spec) {
      alert("Выберите специализацию!");
      return;
    }
    navigate("/quiz");
  }

  return (
    <div className="quiz_container">
      <h3>Подготовка к собеседованиям</h3>
      <div className="quiz__row">
        <div className="specsAndSkills">
          <CollapsibleList
            items={specs}
            title={"Специализация"}
            limit={5}
            listType={"spec"}
            selectedValue={state.spec}
            onSelect={(item) => dispatch(setSpec(item))}
          />
          <CollapsibleList
            items={skills}
            title={"Выберите навыки"}
            limit={5}
            listType={"skill"}
            selectedValue={state.skills}
            onSelect={(item) => dispatch(setSkills(item))}
          />
        </div>
        <div className="quiz__right-col">
          <CollapsibleList
            items={complexity}
            title={"Сложность"}
            limit={4}
            listType={"complexity"}
            selectedValue={state.complexity}
            onSelect={(item) => dispatch(setComplexity(item))}
          />
          <QuestionCounter
            count={state.qtyQuestions}
            setCount={(num) => dispatch(setQtyQuestions(num))}
          />
          <div className="btn__start">
            <MainButton text="Начать →" handleStart={handleStartQuiz} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizLobbyPage;
