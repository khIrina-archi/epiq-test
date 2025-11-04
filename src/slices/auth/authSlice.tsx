import type { PayloadAction } from '@reduxjs/toolkit'

import { createSlice } from '@reduxjs/toolkit'

interface AuthState {
  name: string
}

const initialState: AuthState = { name: 'Iryna' };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<{ name: string }>) {
      state.name = action.payload.name;
    },
  },
})

export const { setUser } = authSlice.actions
export default authSlice.reducer
