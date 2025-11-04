import { useAppDispatch, useAppSelector } from '../app/hooks'
import {
  toggleConfigPage,
  toggleSlider
} from '../slices/featureFlags/featureFlagsSlice'
import { cn } from '../lib/utils'

export function AdminPage() {
  const dispatch = useAppDispatch()
  const flags = useAppSelector(
    (s) =>
      s.featureFlags || { configPageDisabled: false, sliderDisabled: false }
  )
  const { configPageDisabled, sliderDisabled } = flags

  return (
    <section className="section">
      <div>
        <h1>Admin Panel</h1>
        <p>Toggle feature flags to enable/disable parts of the app.</p>
      </div>

      <div className="card max-w-2xl space-y-4">
        {/* Toggle Config Page */}
        <div className="flex items-center justify-between py-4 border-b border-gray-100">
          <div>
            <div className="font-medium text-slate-800">
              <strong>Disable Config Page</strong>
            </div>
            <div className="text-sm text-slate-500">
              Users will be redirected to the table page.
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={!!configPageDisabled}
              onChange={() => dispatch(toggleConfigPage())}
              className="sr-only"
            />
            <span
              className={cn(
                'w-12 h-7 inline-block rounded-full transition-colors',
                configPageDisabled ? 'bg-blue-600' : 'bg-gray-200'
              )}
            />
            <span
              className={cn(
                'absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transform transition-transform',
                configPageDisabled ? 'translate-x-5' : 'translate-x-0'
              )}
              aria-hidden
            />
          </label>
        </div>

        {/* Toggle Slider */}
        <div className="flex items-center justify-between py-4 mt-3">
          <div>
            <div className="font-medium text-slate-800">
              <strong>Disable Slider</strong>
            </div>
            <div className="text-sm text-slate-500">
              Slider on the config page will be disabled.
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={!!sliderDisabled}
              onChange={() => dispatch(toggleSlider())}
              className="sr-only"
            />
            <span
              className={cn(
                'w-12 h-7 inline-block rounded-full transition-colors',
                sliderDisabled ? 'bg-blue-600' : 'bg-gray-200'
              )}
            />
            <span
              className={cn(
                'absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transform transition-transform',
                sliderDisabled ? 'translate-x-5' : 'translate-x-0'
              )}
              aria-hidden
            />
          </label>
        </div>

        <div className="text-sm text-slate-600">
          Current flags:
          <div>
            <strong>
              <span className="font-medium text-slate-800">ConfigPage: </span>
            </strong>
            {configPageDisabled ? 'Disabled' : 'Enabled'}
          </div>
          <div>
            <strong>
              <span className="font-medium text-slate-800">Slider: </span>
            </strong>
            {sliderDisabled ? 'Disabled' : 'Enabled'}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdminPage
