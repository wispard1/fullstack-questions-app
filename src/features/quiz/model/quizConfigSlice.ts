import { createSlice } from "@reduxjs/toolkit";
import type { QuizConfigState } from "./types";


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
    setSpec: (state, action) => {
      state.spec = action.payload;
    },
    setSkills: (state, action) => {
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
    setComplexity: (state, action) => {
      state.complexity = action.payload;
    },
    setQtyQuestions: (state, action) => {
      state.qtyQuestions = action.payload;
    },
  },
});

export const {
  setSpec,
  setSkills,
  setComplexity,
  setQtyQuestions,
} = quizConfigSlice.actions;
