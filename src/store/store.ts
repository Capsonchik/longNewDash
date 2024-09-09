import {configureStore, Middleware} from '@reduxjs/toolkit'
import mainSlice from './store.slice'
import firstSunSlice from './firstSunBurstSlice/firstSunBurst.slice'
import dataToSend from './dataSendSlice/dataToSend.slice'

const customMiddleware: Middleware = store => next => action => {
  console.log('Dispatching action:', action);
  return next(action);
};

const store = configureStore({
  reducer: {
    main: mainSlice,
    firstSunBurst: firstSunSlice,
    dataToSend: dataToSend
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(customMiddleware) // Ваше дополнительное middleware
})

export type AppDispatch = typeof store.dispatch
// export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export type RootState = ReturnType<typeof store.getState>

export default store