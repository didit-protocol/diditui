import { MediaQuery } from '@/utils/index'
import { useMediaQuery, UseMediaQueryOptions } from './useMediaQuery'

export function useSmMediaQuery(options: UseMediaQueryOptions = {}) {
  return useMediaQuery(`(min-width: ${MediaQuery.SM}px)`, options)
}
export function useMdMediaQuery(options: UseMediaQueryOptions = {}) {
  return useMediaQuery(`(min-width: ${MediaQuery.MD}px)`, options)
}
export function useLgMediaQuery(options: UseMediaQueryOptions = {}) {
  return useMediaQuery(`(min-width: ${MediaQuery.LG}px)`, options)
}
export function useXlMediaQuery(options: UseMediaQueryOptions = {}) {
  return useMediaQuery(`(min-width: ${MediaQuery.XL}px)`, options)
}
export function useXxlMediaQuery(options: UseMediaQueryOptions = {}) {
  return useMediaQuery(`(min-width: ${MediaQuery.XXL}px)`, options)
}
