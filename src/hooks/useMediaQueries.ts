import { MediaQuery } from "@/utils/index"
import { useMediaQuery } from "./useMediaQuery"


export function useSmMediaQuery() { return useMediaQuery(`(min-width: ${MediaQuery.SM}px)`); }
export function useMdMediaQuery() { return useMediaQuery(`(min-width: ${MediaQuery.MD}px)`); }
export function useLgMediaQuery() { return useMediaQuery(`(min-width: ${MediaQuery.LG}px)`); }
export function useXlMediaQuery() { return useMediaQuery(`(min-width: ${MediaQuery.XL}px)`); }
export function useXxlMediaQuery() { return useMediaQuery(`(min-width: ${MediaQuery.XXL}px)`); }
