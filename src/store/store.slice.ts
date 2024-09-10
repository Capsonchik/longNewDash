import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type MainSliceType = {
  mainTitle: string;
  mainDescription: string;
  activeKey: string;
}

const initialState: MainSliceType = {
  mainTitle: "Обзор Аналитики",
  mainDescription: "За последние 30 дней ваш показатель отказов увеличился на 5,25 %.",
  activeKey: '1'
}

const mainSlice = createSlice({
  name: "main",
  initialState: initialState,
  reducers: {
    setMainTitle: (state, action: PayloadAction<string>) => {
      state.mainTitle = action.payload
    },
    setActiveKey: (state, action: PayloadAction<string>) => {
      state.activeKey = action.payload
    }
  }
})

export const {
  setMainTitle,
  setActiveKey
} = mainSlice.actions;
export default mainSlice.reducer;