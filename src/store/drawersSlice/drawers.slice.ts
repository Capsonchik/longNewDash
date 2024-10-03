import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
  socDrawerStatus: false,
}

export const drawerSlice = createSlice({
  name: "drawers",
  initialState,
  reducers: {
    setSocDrawerStatus: (state, action: PayloadAction<boolean>) => {
      state.socDrawerStatus = action.payload
    }
  }
})

export const {
  setSocDrawerStatus,
} = drawerSlice.actions;

export default drawerSlice.reducer;