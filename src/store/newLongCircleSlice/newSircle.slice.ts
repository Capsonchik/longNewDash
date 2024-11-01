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
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostNewSunData.fulfilled, (state, action) => {
        state.currentData = action.payload
        state.isAnswersLoading = false
        state.isBottomOn = true
      })
      .addCase(fetchPostNewSunData.pending, (state) => {
        state.isAnswersLoading = true
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
      })

  }
})

export const {
  setFirstQuestion,
  setSecondQuestion,
  setCurrentData,
  setIsBottomOn
} = newCircleSlice.actions;

export default newCircleSlice.reducer;