import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ChoiceItemInterface } from '../../types'

interface dateSliceInterface {
  savedChoices: ChoiceItemInterface[]
}

const initialState: dateSliceInterface = {
  savedChoices: [],
}

const savedChoicesSlice = createSlice({
  name: 'savedChoices',
  initialState,
  reducers: {
    setSavedChoices: (
      state,
      action: PayloadAction<{ saved: ChoiceItemInterface[] }>,
    ) => {
      state.savedChoices = action.payload.saved
    },
    setNewChoice: (
      state,
      action: PayloadAction<{ choice: ChoiceItemInterface }>,
    ) => {
      const newState = [...state.savedChoices, action.payload.choice]
      state.savedChoices = newState
      localStorage.setItem('savedChoices', JSON.stringify(newState))
    },
    deleteChoice: (state, action: PayloadAction<{ date: number }>) => {
      const newState = state.savedChoices.filter(
        item => item.date !== action.payload.date,
      )
      state.savedChoices = newState
      localStorage.setItem('savedChoices', JSON.stringify(newState))
    },
  },
})

export const { setSavedChoices, setNewChoice, deleteChoice } =
  savedChoicesSlice.actions

export default savedChoicesSlice.reducer
