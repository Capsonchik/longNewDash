import {RootState} from "@/store/store";

export const selectMainTitle = (state: RootState) => state.main.mainTitle;
export const selectMainDescription = (state: RootState) => state.main.mainDescription;
export const selectActiveKey = (state: RootState) => state.main.activeKey;
export const selectCurrentRegion = (state: RootState) => state.main.currentRegion;
export const selectCurrentPickValue = (state: RootState) => state.main.currentPickValue;
export const selectCurrentPeriod = (state: RootState) => state.main.currentPeriod;
export const selectIsMinMenu = (state: RootState) => state.main.isMinMenu;
export const selectResultInput = (state: RootState) => state.main.resultInput;
export const selectIndexes = (state: RootState) => state.main.indexes;