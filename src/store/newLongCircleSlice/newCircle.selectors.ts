import {RootState} from "@/store/store";

export const selectNewFirstQuestion = (state: RootState) => state.circle.question1
export const selectNewSecondQuestion = (state: RootState) => state.circle.question2
export const selectNewFirstAnswer = (state: RootState) => state.circle.answ1
export const selectNewSecondAnswer = (state: RootState) => state.circle.answ2
export const selectNewDoubleCircleAnswers = (state: RootState) => state.circle.currentData
export const selectIsNewCircleAnswersLoading = (state: RootState) => state.circle.isAnswersLoading
export const selectIsBottomOn = (state: RootState) => state.circle.isBottomOn