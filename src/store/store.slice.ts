import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type MainSliceType = {
  mainTitle: string;
  mainDescription: string;
}

const initialState: MainSliceType = {
  mainTitle: "Обзор Аналитики",
  mainDescription: "За последние 30 дней ваш показатель отказов увеличился на 5,25 %.",
}

const mainSlice = createSlice({
  name: "main",
  initialState: initialState,
  reducers: {
    setMainTitle: (state, action: PayloadAction<string>) => {
      state.mainTitle = action.payload
    }
  }
})

export const {
  setMainTitle,
} = mainSlice.actions;
export default mainSlice.reducer;