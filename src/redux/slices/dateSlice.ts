import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { dateInterface } from '../../types'
import { findLastDay } from './helper'

interface dateSliceInterface {
  todayDate: dateInterface
  activeDate: dateInterface
}

const initialState: dateSliceInterface = {
  activeDate: {
    day: null,
    year: null,
    month: null,
    daysInMonth: null,
  },
  todayDate: {
    day: null,
    year: null,
    month: null,
  },
}

const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    setTodayDate: (state, action: PayloadAction<{ today: dateInterface }>) => {
      state.todayDate = action.payload.today
    },
    setActiveDate: (state, action: PayloadAction<{ today: dateInterface }>) => {
      state.activeDate = {
        ...action.payload.today,
        daysInMonth: findLastDay(
          action.payload.today.year,
          action.payload.today.month + 1,
        ),
      }
    },
  },
})

export const { setTodayDate, setActiveDate } = dateSlice.actions

export default dateSlice.reducer
