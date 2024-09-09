import {SunDataType} from "@/types/sunDataTypes";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchGetDefaultSunBurst, fetchGetNextSunBurst} from "@/store/firstSunBurstSlice/firstSunBirst.actions";

const initialState: SunDataType = {
  sunData: [],
  currentValue: '',
  key: 1,
  backData: null,
  scaleType: '',
  categoryId: null,
  firstQuestionData: null
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
      state.firstQuestionData = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetDefaultSunBurst.fulfilled, (state, action) => {
        state.sunData = action.payload
      })
      .addCase(fetchGetDefaultSunBurst.pending, (state, action) => {
        state.sunData = []
        state.key = state.key + 1
      })
      .addCase(fetchGetNextSunBurst.fulfilled, (state, action) => {
        state.sunData = action.payload
      })
      .addCase(fetchGetNextSunBurst.pending, (state, action) => {
        state.sunData = []
        state.key = state.key + 1
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