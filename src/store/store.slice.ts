import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type MainSliceType = {
  mainTitle: string;
  mainDescription: string;
  activeKey: string;
  currentRegion: string;
  currentPickValue: string | null;
}

const initialState: MainSliceType = {
  mainTitle: "Обзор Аналитики",
  mainDescription: "За последние 30 дней ваш показатель отказов увеличился на 5,25 %.",
  activeKey: '1',
  currentRegion: 'Красноярский край',
  currentPickValue: null
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
    },
    setCurrentRegion: (state, action: PayloadAction<string>) => {
      state.currentRegion = action.payload
    },
    setCurrentPickValue: (state, action: PayloadAction<string | null>) => {
      state.currentPickValue = action.payload
    }
  }
})

export const {
  setMainTitle,
  setActiveKey,
  setCurrentRegion,
  setCurrentPickValue,
} = mainSlice.actions;
export default mainSlice.reducer;