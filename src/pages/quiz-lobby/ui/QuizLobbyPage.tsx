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
import type { SelectOption } from "@/shared/types";

export function QuizLobbyPage() {
  const { data: specs = [] } = useGetSpecsQuery();
  const { data: skills = [] } = useGetSkillsQuery();
  const navigate = useNavigate();

  const state = useSelector(
    (state: { quizConfig: QuizConfigState }) => state.quizConfig
  );
  const dispatch = useDispatch();

  const getSelectedIds = (
    value: SelectOption | SelectOption[] | null | string | number
  ): string[] => {
    if (!value) return [];
    if (Array.isArray(value)) {
      return value.map((item) => String(item.id));
    }
    if (typeof value === "object") {
      return [String(value.id)];
    }
    return [String(value)];
  };

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
            selectedValues={getSelectedIds(state.spec)}
            onSelect={(id) => {
              const selectedSpec =
                specs.find((s) => String(s.id) === id) || null;
              dispatch(setSpec(selectedSpec));
            }}
          />
          <CollapsibleList
            items={skills}
            title={"Выберите навыки"}
            limit={5}
            showIcon={true}
            selectedValues={getSelectedIds(state.skills)}
            onSelect={(id) => {
              const selectedSkill = skills.find(
                (s) => String(s.id) === id
              );
              if (!selectedSkill) return;
              dispatch(setSkills(selectedSkill));
            }}
          />
        </div>
        <div className="quiz__right-col">
          <CollapsibleList
            items={complexity}
            title={"Сложность"}
            limit={4}
            selectedValues={
              state.complexity ? [String(state.complexity.id)] : []
            }
            onSelect={(value) => {
              const selectedComplexity =
                complexity.find((c) => String(c.id) === value) || null;
              dispatch(setComplexity(selectedComplexity));
            }}
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
