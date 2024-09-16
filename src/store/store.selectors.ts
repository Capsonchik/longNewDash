import {RootState} from "@/store/store";

export const selectMainTitle = (state: RootState) => state.main.mainTitle;
export const selectMainDescription = (state: RootState) => state.main.mainDescription;
export const selectActiveKey = (state: RootState) => state.main.activeKey;
export const selectCurrentRegion = (state: RootState) => state.main.currentRegion;