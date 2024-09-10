import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type InitialStateProps = {
  question1: number | null;
  question2: number | null;
  answ1: string[] | null;
  answ2: string[] | null;
}

const initialState: InitialStateProps = {
  question1: null,
  question2: null,
  answ1: null,
  answ2: null,
}

const dataToSendSlice = createSlice({
  name: "dataToSend",
  initialState,
  reducers: {
    setFirstDataId: (state, action: PayloadAction<number>) => {
      state.question1 = action.payload
    },
    setSecondDataId: (state, action: PayloadAction<number>) => {
      state.question2 = action.payload
    },
    setFirstAnswerData: (state, action: PayloadAction<string[] | null>) => {
      state.answ1 = action.payload
    },
    setSecondAnswerData: (state, action: PayloadAction<string[] | null>) => {
      state.answ2 = action.payload
    }
  },
})

export const {
  setFirstDataId,
  setSecondDataId,
  setFirstAnswerData,
  setSecondAnswerData
} = dataToSendSlice.actions;

export default dataToSendSlice.reducer;