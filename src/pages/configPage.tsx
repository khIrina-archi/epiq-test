import React, { useEffect } from 'react'
import { useNavigate } from '@tanstack/react-router'

import { useAppDispatch, useAppSelector } from '../app/hooks'
import { setRowsCount } from '../slices/config'

export function ConfigPage() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const rowsCount = useAppSelector((s) => s.config.rowsCount)
  const flags = useAppSelector((s) => s.featureFlags)
  const { configPageDisabled, sliderDisabled } = flags || { configPageDisabled: false, sliderDisabled: false }

  useEffect(() => {
    if (configPageDisabled) {
      navigate({ to: '/table' })
    }
  }, [configPageDisabled, navigate])

  const changeValue = (value: number) => {
    if (value < 1) value = 1
    if (value > 10) value = 10
    dispatch(setRowsCount(value))
  }

  const handleOnChange = (e: any) => changeValue(Number(e.target.value) || 1)

  return (
    <section>
      <div className="mb-6">
        <h1 className="text-4xl font-extrabold text-slate-800">Table Configuration</h1>
        <p className="mt-2 text-slate-500 max-w-xl">
          Configure how many rows should be shown in the data table. The value persists across reloads.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        {/* Slider */}
        <div className="mb-8">
          <label className="block text-lg font-medium text-slate-700 mb-3">Slider Input (1–10)</label>

          <div className="flex items-center gap-6">
            <input
              type="range"
              min={1}
              max={10}
              value={rowsCount}
              disabled={sliderDisabled}
              onChange={handleOnChange}
              className={`w-full h-2 rounded-lg appearance-none ${
                sliderDisabled ? 'opacity-40 cursor-not-allowed' : ''
              }`}
              style={{
                accentColor: '#2563eb', // blue-600
              }}
            />
          </div>
        </div>

        {/* Number input */}
        <div className="mb-4">
          <label className="block text-lg font-medium text-slate-700 mb-3">Number Input (1–10)</label>
          <input
            type="number"
            min={1}
            max={10}
            value={rowsCount}
            onChange={handleOnChange}
            className="w-24 px-3 py-2 rounded-lg border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <p className="mt-6 text-slate-600">
          Current configuration value:{' '}
          <span className="font-semibold text-slate-800">{rowsCount}</span>
        </p>
      </div>
    </section>
  )
}

export default ConfigPage
