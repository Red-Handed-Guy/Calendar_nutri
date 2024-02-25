import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { DateInterface } from '../../types'
import { findLastDay } from '../../utils/consts'

interface DateSliceInterface {
  todayDate: DateInterface
  activeDate: DateInterface
}

const initialState: DateSliceInterface = {
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
    setTodayDate: (state, action: PayloadAction<{ today: DateInterface }>) => {
      state.todayDate = action.payload.today
    },

    setActiveDate: (
      state,
      action: PayloadAction<{ active: DateInterface }>,
    ) => {
      state.activeDate = {
        ...action.payload.active,
        daysInMonth: findLastDay(
          action.payload.active.year,
          action.payload.active.month,
        ),
      }
    },
    setNextDay: state => {
      if (
        state.activeDate.day === state.activeDate.daysInMonth &&
        state.activeDate.month === 11
      ) {
        const month = 0
        const year = state.activeDate.year + 1
        state.activeDate.day = 1
        state.activeDate.month = month
        state.activeDate.year = year
        state.activeDate.daysInMonth = findLastDay(year, month)
        return
      }
      if (state.activeDate.day === state.activeDate.daysInMonth) {
        const month = state.activeDate.month + 1
        state.activeDate.day = 1
        state.activeDate.month = month
        state.activeDate.daysInMonth = findLastDay(state.activeDate.year, month)
        return
      }
      state.activeDate.day = state.activeDate.day + 1
    },
    setPreviousDay: state => {
      if (state.activeDate.day === 1 && state.activeDate.month === 0) {
        const month = 11
        const year = state.activeDate.year - 1
        state.activeDate.day = findLastDay(year, month)
        state.activeDate.month = month
        state.activeDate.year = year
        state.activeDate.daysInMonth = findLastDay(year, month)
        return
      }
      if (state.activeDate.day === 1) {
        const month = state.activeDate.month - 1
        state.activeDate.day = findLastDay(state.activeDate.year, month)
        state.activeDate.month = month
        state.activeDate.daysInMonth = findLastDay(state.activeDate.year, month)
        return
      }
      state.activeDate.day = state.activeDate.day - 1
    },
  },
})

export const { setTodayDate, setActiveDate, setNextDay, setPreviousDay } =
  dateSlice.actions

export default dateSlice.reducer
