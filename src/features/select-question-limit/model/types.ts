export interface QuestionCounterProps {
  count: number;
  setCount: (count: number) => void;
  min?: number;
  max?: number;
}
