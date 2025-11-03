// src/app/hooks.ts
import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'

// Типизированный useDispatch
export const useAppDispatch: () => AppDispatch = useDispatch

// Типизированный useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
