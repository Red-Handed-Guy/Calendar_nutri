import { configureStore } from '@reduxjs/toolkit'
import dateSlice from './slices/date_slice'
import activeMonthsEnumlice from './slices/active_month_slice'
import savedChoicesSlice from './slices/saved_choices_slice'

export const store = configureStore({
  reducer: { dateSlice, activeMonthsEnumlice, savedChoicesSlice },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
