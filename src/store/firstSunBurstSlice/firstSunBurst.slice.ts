import {SunDataType} from "@/types/sunDataTypes";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
  fetchGetBackData,
  fetchGetDefaultSunBurst,
  fetchGetNextSunBurst,
  fetchGetSunBurstBack
} from "@/store/firstSunBurstSlice/firstSunBirst.actions";

const initialState: SunDataType = {
  sunData: [],
  currentValue: '',
  key: 1,
  backData: null,
  scaleType: '',
  categoryId: null,
  questionData: null
}

const sunDataReducer = createSlice({
  name: "firstSunBurst",
  initialState: initialState,
  reducers: {
    setCurrentValue: (state, action: PayloadAction<string>) => {
      state.currentValue = action.payload
    },
    setFirstBackData: (state, action: PayloadAction<string>) => {
      state.backData = action.payload
    },
    setFirstScaleType: (state, action: PayloadAction<string>) => {
      state.scaleType = action.payload
    },
    setFirstCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload
    },
    setFirstQuestionData: (state, action: PayloadAction<any>) => {
      state.questionData = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetDefaultSunBurst.fulfilled, (state, action) => {
        state.sunData = action.payload
        state.key = state.key + 1
      })
      .addCase(fetchGetDefaultSunBurst.pending, (state) => {
        state.sunData = []
      })
      .addCase(fetchGetNextSunBurst.fulfilled, (state, action) => {
        state.sunData = action.payload
        state.key = state.key + 1
      })
      .addCase(fetchGetNextSunBurst.pending, (state) => {
        state.sunData = []
      })
      .addCase(fetchGetSunBurstBack.fulfilled, (state, action) => {
        state.sunData = action.payload
        state.key = state.key + 1
      })
      .addCase(fetchGetSunBurstBack.pending, (state) => {
        state.sunData = []
      })
      .addCase(fetchGetBackData.fulfilled, (state, action) => {
        state.backData = action.payload
      })
  }
})

export const {
  setCurrentValue,
  setFirstBackData,
  setFirstScaleType,
  setFirstCategoryId,
  setFirstQuestionData
} = sunDataReducer.actions

export default sunDataReducer.reducer