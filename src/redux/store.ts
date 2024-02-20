import { configureStore } from '@reduxjs/toolkit'
import dateSlice from './slices/dateSlice'
import activeMonthSlice from './slices/activeMonthSlice'

export const store = configureStore({
  reducer: { dateSlice, activeMonthSlice },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
