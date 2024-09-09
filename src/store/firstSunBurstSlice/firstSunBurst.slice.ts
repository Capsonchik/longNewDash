import {SunDataType} from "@/types/sunDataTypes";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchGetDefaultSunBurst, fetchGetNextSunBurst} from "@/store/firstSunBurstSlice/firstSunBirst.actions";

const initialState: SunDataType = {
  sunData: [],
  currentValue: ''
}

const sunDataReducer = createSlice({
  name: "firstSunBurst",
  initialState: initialState,
  reducers: {
    setCurrentValue: (state, action: PayloadAction<string>) => {
      state.currentValue = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetDefaultSunBurst.fulfilled, (state, action) => {
        state.sunData = action.payload
      })
      .addCase(fetchGetNextSunBurst.fulfilled, (state, action) => {
        state.sunData = action.payload
      })
  }
})

export const {
  setCurrentValue,
} = sunDataReducer.actions

export default sunDataReducer.reducer