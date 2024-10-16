import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type MainSliceType = {
  mainTitle: string;
  mainDescription: string;
  activeKey: string;
  currentRegion: string | null;
  currentPickValue: string | null;
  currentPeriod: string;
  isMinMenu: boolean;
  resultInput: 'graph' | 'map'
  indexes: string[];
}

const initialState: MainSliceType = {
  mainTitle: "Лонгитюдная система",
  mainDescription: "Витрина данных",
  activeKey: '1',
  currentRegion: 'Красноярский край',
  currentPickValue: null,
  currentPeriod: 'Год',
  isMinMenu: false,
  resultInput: 'map',
  indexes: []
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
    setCurrentRegion: (state, action: PayloadAction<string | null>) => {
      state.currentRegion = action.payload
    },
    setCurrentPickValue: (state, action: PayloadAction<string | null>) => {
      state.currentPickValue = action.payload
    },
    setCurrentPeriod: (state, action: PayloadAction<string>) => {
      state.currentPeriod = action.payload
    },
    setIsMinMenu: (state, action: PayloadAction<boolean>) => {
      state.isMinMenu = action.payload
    },
    setResultInput: (state, action: PayloadAction<'graph' | 'map'>) => {
      state.resultInput = action.payload
    },
    setIndexes: (state, action: PayloadAction<string[]>) => {
      state.indexes = action.payload
    }
  }
})

export const {
  setMainTitle,
  setActiveKey,
  setCurrentRegion,
  setCurrentPickValue,
  setCurrentPeriod,
  setIsMinMenu,
  setResultInput,
  setIndexes
} = mainSlice.actions;
export default mainSlice.reducer;