// src/pages/AdminPage.tsx
import { useAppDispatch, useAppSelector } from '../app/hooks'
import {
  toggleConfigPage,
  toggleSlider
} from '../features/featureFlags/featureFlagsSlice'

export function AdminPage() {
  const dispatch = useAppDispatch()
  const { configPageDisabled, sliderDisabled } = useAppSelector(
    (state) => state.featureFlags
  )

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-semibold mb-6">
        Admin Panel - Feature Flags
      </h1>

      <div className="space-y-6">
        {/* Toggle Config Page */}
        <div className="flex items-center justify-between">
          <span className="text-gray-700 font-medium">Disable Config Page</span>
          <input
            type="checkbox"
            checked={configPageDisabled}
            onChange={() => dispatch(toggleConfigPage())}
            className="h-5 w-5 accent-blue-600"
          />
        </div>

        {/* Toggle Slider */}
        <div className="flex items-center justify-between">
          <span className="text-gray-700 font-medium">Disable Slider</span>
          <input
            type="checkbox"
            checked={sliderDisabled}
            onChange={() => dispatch(toggleSlider())}
            className="h-5 w-5 accent-blue-600"
          />
        </div>
      </div>

      <p className="mt-6 text-gray-500">
        Feature flags state:
        <br />
        Config Page Disabled:{' '}
        <span className="font-semibold">
          {configPageDisabled ? 'Yes' : 'No'}
        </span>
        <br />
        Slider Disabled:{' '}
        <span className="font-semibold">{sliderDisabled ? 'Yes' : 'No'}</span>
      </p>
    </div>
  )
}

export default AdminPage
