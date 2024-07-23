/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: ['--font-inter', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
      primary: 'rgb(var(--color-primary) / <alpha-value>) /* #2667FF */',
      soft: 'rgb(var(--color-soft) / <alpha-value>) /* #F9F7F9 */',
      accent: 'rgb(var(--color-accent) / <alpha-value>) /* #ECF677 */',

      background: 'rgb(var(--color-background) / <alpha-value>) /* #FEFEFE */',
      foreground: 'rgb(var(--color-foreground) / <alpha-value>) /* #1A1A1A */',

      'surface-hi': 'rgb(var(--color-surface-hi) / <alpha-value>) /* #4B5058 */',
      'surface-md': 'rgb(var(--color-surface-md) / <alpha-value>) /* #9DA1A1 */',
      'surface-mdlo': 'rgb(var(--color-surface-mdlo) / <alpha-value>) /* #C4C7C7 */',
      'surface-lo': 'rgb(var(--color-surface-lo) / <alpha-value>) /* #F4F4F6 */',
      'surface-ulo': 'rgb(var(--color-surface-ulo) / <alpha-value>) /* #F8F8F8 */',

      error: 'rgb(var(--color-error) / <alpha-value>) /* #FF4141 */',
      success: 'rgb(var(--color-success) / <alpha-value>) /* #41D97F */',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
