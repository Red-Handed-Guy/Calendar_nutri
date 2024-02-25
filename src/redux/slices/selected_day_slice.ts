import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { DateInterface } from '../../types'

interface SelectedDateSliceInterface {
  selectedDate: DateInterface
}

const initialState: SelectedDateSliceInterface = {
  selectedDate: {
    day: null,
    year: null,
    month: null,
  },
}

const selectedDateSlice = createSlice({
  name: 'selectedDate',
  initialState,
  reducers: {
    setSelectedDate: (
      state,
      action: PayloadAction<{ selected: DateInterface }>,
    ) => {
      state.selectedDate = action.payload.selected
    },
    resetSelectedDate: state => {
      state.selectedDate = initialState.selectedDate
    },
  },
})

export const { setSelectedDate, resetSelectedDate } = selectedDateSlice.actions

export default selectedDateSlice.reducer
