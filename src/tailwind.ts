import defaultTheme from 'tailwindcss/defaultTheme'
import tailwindcssFomrs from '@tailwindcss/forms'

interface Content {
  /**
   * Path to `node_modules` where `flowbite-react` is installed
   *
   * ===============================================
   *
   * For monorepo setup where `flowbite-react` is installed in the root `node_modules` but used in `apps/web` directory
   * @example
   * ```
   * // tailwind.config.(js|cjs|mjs) file
   *
   * // cjs
   * const didit = require("diditui/tailwind");
   * // esm
   * import didit from "diditui/tailwind";
   *
   * {
   *   content: [
   *     // ...
   *     didit.content({ base: "../../" })
   *   ],
   *   plugins: [
   *     // ...
   *     didit.plugins()
   *   ]
   * }
   * ```
   *
   * @default "./"
   */
  base?: string
}

export function content({ base = './' }: Content = {}) {
  const path = 'node_modules/diditui/dist/**/*.{js,ts,jsx,tsx}'

  return `${base}${path}`
}

export function plugins() {
  return [tailwindcssFomrs]
}

export function theme() {
  return {
    fontFamily: {
      inter: ['--font-inter', ...defaultTheme.fontFamily.sans]
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
      primary: 'rgb(var(--color-primary) / <alpha-value>) /* #2667FF */',
      soft: 'rgb(var(--color-soft) / <alpha-value>) /* #E8EAF8 */',
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
      warning: 'rgb(var(--color-warning) / <alpha-value>) /* #E66E00 */'
    },
    boxShadow: {
      card: '0px 16.057px 61.177px 0px rgba(0, 0, 0, 0.03), 0px 9.675px 36.862px 0px rgba(0, 0, 0, 0.02), 0px 5.388px 20.527px 0px rgba(0, 0, 0, 0.02), 0px 2.317px 8.829px 0px rgba(0, 0, 0, 0.01);'
    },
    keyframes: {
      'slide-in': {
        '0%': { opacity: '0', transform: 'translateY(-100%)' },
        '100%': { opacity: '1', transform: 'translateY(0)' }
      }
    },
    animation: {
      'slide-in': 'slide-in .20s ease-in-out forwards',
      ...defaultTheme.animation
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    }
  }
}
