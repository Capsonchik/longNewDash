import {SunDataType} from "@/types/sunDataTypes";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

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
  }
})

export const {
  setCurrentValue,
} = sunDataReducer.actions

export default sunDataReducer.reducer