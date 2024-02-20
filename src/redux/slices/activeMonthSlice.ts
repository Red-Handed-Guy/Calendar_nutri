import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { dateInterface } from '../../types'
import { range } from './helper'

interface activeMonthInterface {
  activeMonthArr: number[][]
  date: dateInterface
}

const initialState: activeMonthInterface = {
  activeMonthArr: [],
  date: {
    year: null,
    month: null,
  },
}

const activeMonthSlice = createSlice({
  name: 'activeMonth',
  initialState,
  reducers: {
    setMonth: (state, action: PayloadAction<{ date: dateInterface }>) => {
      state.activeMonthArr = range(action.payload.date)
      state.date = action.payload.date
    },
    monthIncrement: state => {
      if (state.date.month === 11) {
        const month = 0
        const year = state.date.year + 1
        state.date = { ...state.date, month, year }
        state.activeMonthArr = range({ month, year })
        return
      }
      const month = state.date.month + 1
      state.date = { ...state.date, month }
      state.activeMonthArr = range({ month, year: state.date.year })
    },
    monthDecrement: state => {
      if (state.date.month === 0) {
        const month = 11
        const year = state.date.year - 1
        state.date = { ...state.date, month, year }
        state.activeMonthArr = range({ month, year })
        return
      }
      const month = state.date.month - 1
      state.date = { ...state.date, month }
      state.activeMonthArr = range({ month, year: state.date.year })
    },
  },
})

export const { setMonth, monthIncrement, monthDecrement } =
  activeMonthSlice.actions

export default activeMonthSlice.reducer
