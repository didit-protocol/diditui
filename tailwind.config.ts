/** @type {import('tailwindcss').Config} */

import { Config } from 'tailwindcss'
import * as diditConfig from './src/tailwind'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: diditConfig.theme(),
  plugins: diditConfig.plugins()
}

export default config
