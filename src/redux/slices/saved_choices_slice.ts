import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ChoiceType } from '../../types'

interface choiceInterface {
  choice: ChoiceType
  date: number
}

interface dateSliceInterface {
  savedChoices: choiceInterface[]
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
      action: PayloadAction<{ saved: choiceInterface[] }>,
    ) => {
      state.savedChoices = action.payload.saved
    },
  },
})

export const { setSavedChoices } = savedChoicesSlice.actions

export default savedChoicesSlice.reducer
