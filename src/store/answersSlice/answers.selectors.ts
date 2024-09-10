import {RootState} from "@/store/store";

export const selectFirstAnswers = (state: RootState) => state.answers.answers
export const selectSecondAnswers = (state: RootState) => state.answers.secondAnswers
export const selectAnswersResponse = (state: RootState) => state.answers.answerResponse
