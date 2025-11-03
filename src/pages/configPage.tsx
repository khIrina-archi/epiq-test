import { useAppDispatch, useAppSelector } from '../app/hooks'
import { setRowsCount } from '../features/config/configSlice'
import { useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'

export function ConfigPage() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const rowsCount = useAppSelector((state) => state.config.rowsCount)
  const { configPageDisabled, sliderDisabled } = useAppSelector(
    (state) => state.featureFlags
  )

  // Redirect if feature flag disables this page
  useEffect(() => {
    if (configPageDisabled) {
      navigate({ to: '/table' })
    }
  }, [configPageDisabled, navigate])

  const handleChange = (value: number) => {
    if (value < 1 || value > 10) return
    dispatch(setRowsCount(value))
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-semibold mb-6">Table Configuration</h1>

      <div className="space-y-6">
        {/* Slider input */}
        <div>
          <label className="block mb-2 text-gray-700 font-medium">
            Slider Input (1–10)
          </label>
          <input
            type="range"
            min={1}
            max={10}
            value={rowsCount}
            disabled={sliderDisabled}
            onChange={(e) => handleChange(Number(e.target.value))}
            className={`w-full ${
              sliderDisabled
                ? 'opacity-50 cursor-not-allowed'
                : 'cursor-pointer accent-blue-600'
            }`}
          />
        </div>

        {/* Number input */}
        <div>
          <label className="block mb-2 text-gray-700 font-medium">
            Number Input (1–10)
          </label>
          <input
            type="number"
            min={1}
            max={10}
            value={rowsCount}
            onChange={(e) => handleChange(Number(e.target.value))}
            className="w-24 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <p className="mt-6 text-gray-500">
        Current configuration value:{' '}
        <span className="font-semibold text-gray-800">{rowsCount}</span>
      </p>
    </div>
  )
}

export default ConfigPage
