import {SunDataType} from "@/types/sunDataTypes";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
  fetchGetSecondBackData,
  fetchGetSecondDefaultSunBurst,
  fetchGetSecondNextSunBurst,
  fetchGetSecondSunBurstBack
} from "@/store/secondSunBirstSlice/secondSunBurst.actions";

const initialState: SunDataType = {
  sunData: [],
  currentValue: '',
  key: 1,
  backData: null,
  scaleType: '',
  categoryId: null,
  questionData: null
}

export const secondSunBurstSlice = createSlice({
  name: "secondSunBurst",
  initialState,
  reducers: {
    setSecondCurrentValue: (state, action: PayloadAction<string>) => {
      state.currentValue = action.payload
    },
    setSecondBackData: (state, action: PayloadAction<string>) => {
      state.backData = action.payload
    },
    setSecondScaleType: (state, action: PayloadAction<string>) => {
      state.scaleType = action.payload
    },
    setSecondCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload
    },
    setSecondQuestionData: (state, action: PayloadAction<any>) => {
      state.questionData = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetSecondDefaultSunBurst.fulfilled, (state, action) => {
        state.sunData = action.payload
        state.key = state.key + 1
      })
      .addCase(fetchGetSecondDefaultSunBurst.pending, (state) => {
        state.sunData = []
      })
      .addCase(fetchGetSecondNextSunBurst.fulfilled, (state, action) => {
        state.sunData = action.payload
        state.key = state.key + 1
      })
      .addCase(fetchGetSecondNextSunBurst.pending, (state) => {
        state.sunData = []
      })
      .addCase(fetchGetSecondSunBurstBack.fulfilled, (state, action) => {
        state.sunData = action.payload
        state.key = state.key + 1
      })
      .addCase(fetchGetSecondSunBurstBack.pending, (state) => {
        state.sunData = []
      })
      .addCase(fetchGetSecondBackData.fulfilled, (state, action) => {
        state.backData = action.payload
      })
  }
})

export const {
  setSecondBackData,
  setSecondCategoryId,
  setSecondScaleType,
  setSecondQuestionData,
  setSecondCurrentValue
} = secondSunBurstSlice.actions;
export default secondSunBurstSlice.reducer;