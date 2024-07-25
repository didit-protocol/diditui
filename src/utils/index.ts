import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'


const SM_BREAKPOINT = 640;
const MD_BREAKPOINT = 768;
const LG_BREAKPOINT = 1024;
const XL_BREAKPOINT = 1280;
const XXL_BREAKPOINT = 1536;

export const MediaQuery = {
  SM: SM_BREAKPOINT,
  MD: MD_BREAKPOINT,
  LG: LG_BREAKPOINT,
  XL: XL_BREAKPOINT,
  XXL: XXL_BREAKPOINT,
};

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes))
}
