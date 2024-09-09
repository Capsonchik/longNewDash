import {RootState} from "@/store/store";

export const selectFirstSunData = (state: RootState) => state.firstSunBurst.sunData
export const selectFirstDataKey = (state: RootState) => state.firstSunBurst.key
export const selectFirstBackData = (state: RootState) => state.firstSunBurst.backData