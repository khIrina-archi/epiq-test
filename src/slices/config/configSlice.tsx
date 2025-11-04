import type { PayloadAction } from '@reduxjs/toolkit'

import { createSlice } from '@reduxjs/toolkit'

interface ConfigState {
  rowsCount: number
}

const initialState: ConfigState = { rowsCount: 5 }

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setRowsCount: (state, action: PayloadAction<number>) => {
      state.rowsCount = action.payload
    }
  }
})

export const { setRowsCount } = configSlice.actions
export default configSlice.reducer
