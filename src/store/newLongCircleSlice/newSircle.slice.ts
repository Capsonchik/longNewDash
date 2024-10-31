import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
  fetchGetNewFirstAnswer,
  fetchGetNewSecondAnswer,
  fetchPostNewSunData
} from "@/store/newLongCircleSlice/newCircle.actions";

type InitialStateType = {
  question1: string,
  question2: string,
  answ1: string[],
  answ2: string[],
  currentData: []
}

const initialState: InitialStateType = {
  question1: '',
  question2: '',
  answ1: [],
  answ2: [],
  currentData: []
}

export const newCircleSlice = createSlice({
  name: 'newCircleSlice',
  initialState,
  reducers: {
    setFirstQuestion: (state, action: PayloadAction<string>) => {
      state.question1 = action.payload
    },
    setSecondQuestion: (state, action: PayloadAction<string>) => {
      state.question2 = action.payload
    },
    setCurrentData: (state) => {
      state.currentData = []
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostNewSunData.fulfilled, (state, action) => {
        state.currentData = action.payload
      })
      .addCase(fetchGetNewFirstAnswer.fulfilled, (state, action) => {
        state.answ1 = action.payload
      })
      .addCase(fetchGetNewSecondAnswer.fulfilled, (state, action) => {
        state.answ2 = action.payload
      })
  }
})

export const {
  setFirstQuestion,
  setSecondQuestion,
  setCurrentData,
} = newCircleSlice.actions;

export default newCircleSlice.reducer;