import {RootState} from "@/store/store";

export const selectSecondSunData = (state: RootState) => state.secondSunBurst.sunData
export const selectSecondSunDataKey = (state: RootState) => state.secondSunBurst.key
export const selectSecondBackData = (state: RootState) => state.secondSunBurst.backData