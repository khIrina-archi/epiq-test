// src/features/featureFlags/featureFlagsSlice.ts
import { createSlice } from '@reduxjs/toolkit'

interface FeatureFlagsState {
  configPageDisabled: boolean
  sliderDisabled: boolean
}

const initialState: FeatureFlagsState = {
  configPageDisabled: false,
  sliderDisabled: false
}

const featureFlagsSlice = createSlice({
  name: 'featureFlags',
  initialState,
  reducers: {
    toggleConfigPage: (state) => {
      state.configPageDisabled = !state.configPageDisabled
    },
    toggleSlider: (state) => {
      state.sliderDisabled = !state.sliderDisabled
    }
  }
})

export const { toggleConfigPage, toggleSlider } = featureFlagsSlice.actions
export default featureFlagsSlice.reducer
