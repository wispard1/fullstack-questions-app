import { createSlice } from "@reduxjs/toolkit";
import type { QuizState } from "./types";

const initialState: QuizState = {
  answers: [],
  currentIndex: 0,
  score: 0,
  isFinished: false,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    nextQuestion: (state, action) => {
      if (action.payload.isKnown === "KNOWN") {
        state.score += 1;
      }
      state.answers.push({
        questionId: action.payload.questionId,
        questionTitle: action.payload.questionTitle,
        answer: action.payload.isKnown,
      });
      if (state.currentIndex < action.payload.length - 1) {
        state.currentIndex += 1;
      } else {
        state.isFinished = true;
      }
    },
    resetQuiz: () => {
      return initialState;
    },
  },
});

export const { nextQuestion, resetQuiz } = quizSlice.actions;
