import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
  fetchGetHiData,
  fetchGetNewFirstAnswer,
  fetchGetNewSecondAnswer,
  fetchPostNewSunData
} from "@/store/newLongCircleSlice/newCircle.actions";
import {HiType} from "@/types/hiType";

type InitialStateType = {
  question1: string,
  question2: string,
  answ1: string[],
  answ2: string[],
  currentData: {},
  currentDataError: boolean,
  isAnswersLoading: boolean,
  isBottomOn: boolean,
  hiData: HiType | undefined,
  hiDataError: boolean,
  hiDataLoader: boolean,
}

const initialState: InitialStateType = {
  question1: '',
  question2: '',
  answ1: [],
  answ2: [],
  currentData: {},
  currentDataError: false,
  isAnswersLoading: false,
  isBottomOn: false,
  hiData: undefined,
  hiDataError: false,
  hiDataLoader: false
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
      state.currentData = {}
    },
    setIsBottomOn: (state, action: PayloadAction<boolean>) => {
      state.isBottomOn = action.payload
    },
    clearHiData: (state) => {
      state.hiData = undefined
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostNewSunData.fulfilled, (state, action) => {
        state.currentData = action.payload
        state.isAnswersLoading = false
        state.isBottomOn = true
        state.currentDataError = false
      })
      .addCase(fetchPostNewSunData.pending, (state) => {
        state.isAnswersLoading = true
      })
      .addCase(fetchPostNewSunData.rejected, (state, action) => {
        state.currentDataError = true
      })
      .addCase(fetchGetNewFirstAnswer.fulfilled, (state, action) => {
        state.answ1 = action.payload
      })
      .addCase(fetchGetNewSecondAnswer.fulfilled, (state, action) => {
        state.answ2 = action.payload
      })
      .addCase(fetchGetHiData.fulfilled, (state, action) => {
        state.hiData = action.payload
        state.hiDataLoader = false
        state.hiDataError = false
      })
      .addCase(fetchGetHiData.pending, (state) => {
        state.hiDataLoader = true
      })
      .addCase(fetchGetHiData.rejected, (state) => {
        state.hiDataLoader = false
        state.hiDataError = true
        state.isAnswersLoading = false
      })

  }
})

export const {
  setFirstQuestion,
  setSecondQuestion,
  setCurrentData,
  setIsBottomOn,
  clearHiData
} = newCircleSlice.actions;

export default newCircleSlice.reducer;