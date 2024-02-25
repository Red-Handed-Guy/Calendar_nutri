import { configureStore } from '@reduxjs/toolkit'
import dateSlice from './slices/date_slice'
import activeMonthsSlice from './slices/active_month_slice'
import savedChoicesSlice from './slices/saved_choices_slice'
import selectedDateSlice from './slices/selected_day_slice'

export const store = configureStore({
  reducer: {
    dateSlice,
    activeMonthsSlice,
    savedChoicesSlice,
    selectedDateSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
