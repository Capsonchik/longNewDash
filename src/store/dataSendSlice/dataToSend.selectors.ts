import {RootState} from "@/store/store";


export const selectDataToSendFirstAnswers = (state: RootState) => state.dataToSend.answ1
export const selectDataToSendSecondAnswer = (state: RootState) => state.dataToSend.answ2

export const selectDataToSend = (state: RootState) => state.dataToSend
