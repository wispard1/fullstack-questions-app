import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { QuizConfigState } from "./types";
import type { SelectOption } from "@/shared/types";

const initialState: QuizConfigState = {
  spec: null,
  skills: [],
  complexity: null,
  qtyQuestions: 1,
};

export const quizConfigSlice = createSlice({
  name: "quizConfig",
  initialState,
  reducers: {
    setSpec: (state, action: PayloadAction<SelectOption | null>) => {
      state.spec = action.payload;
    },
    toggleSkill: (state, action: PayloadAction<SelectOption>) => {
      const isExist = state.skills.some(
        (skill) => skill.id === action.payload.id
      );
      if (isExist) {
        state.skills = state.skills.filter(
          (skill) => skill.id !== action.payload.id
        );
      } else {
        state.skills.push(action.payload);
      }
    },
    setComplexity: (state, action: PayloadAction<SelectOption | null>) => {
      state.complexity = action.payload;
    },
    setQtyQuestions: (state, action: PayloadAction<number>) => {
      state.qtyQuestions = action.payload;
    },
  },
});

export const { setSpec, toggleSkill, setComplexity, setQtyQuestions } =
  quizConfigSlice.actions;
