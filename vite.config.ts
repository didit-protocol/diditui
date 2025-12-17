import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig, PluginOption } from 'vite'
import dts from 'vite-plugin-dts'
import svgr from 'vite-plugin-svgr'
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }]
  },
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, 'src/index.ts'),
        styles: path.resolve(__dirname, 'src/styles.ts'),
        tailwind: path.resolve(__dirname, 'src/tailwind.ts'),
        'components/ActionButton/index': path.resolve(__dirname, 'src/components/ActionButton/index.tsx'),
        'components/Button/index': path.resolve(__dirname, 'src/components/Button/index.tsx'),
        'components/Card/index': path.resolve(__dirname, 'src/components/Card/index.tsx'),
        'components/Checkbox/index': path.resolve(__dirname, 'src/components/Checkbox/index.tsx'),
        'components/CopyValue/index': path.resolve(__dirname, 'src/components/CopyValue/index.tsx'),
        'components/DiditAnimatedLogo/index': path.resolve(__dirname, 'src/components/DiditAnimatedLogo/index.tsx'),
        'components/Icon/index': path.resolve(__dirname, 'src/components/Icon/index.tsx'),
        'components/IconButton/index': path.resolve(__dirname, 'src/components/IconButton/index.tsx'),
        'components/Input/index': path.resolve(__dirname, 'src/components/Input/index.tsx'),
        'components/Modal/index': path.resolve(__dirname, 'src/components/Modal/index.tsx'),
        'components/QrCode/index': path.resolve(__dirname, 'src/components/QrCode/index.tsx'),
        'components/SearchInput/index': path.resolve(__dirname, 'src/components/SearchInput/index.tsx'),
        'components/SearchMini/index': path.resolve(__dirname, 'src/components/SearchMini/index.tsx'),
        'components/SelectDropdown/index': path.resolve(__dirname, 'src/components/SelectDropdown/index.tsx'),
        'components/Spinner/index': path.resolve(__dirname, 'src/components/Spinner/index.tsx'),
        'components/StatusLabel/index': path.resolve(__dirname, 'src/components/StatusLabel/index.tsx'),
        'components/Text/index': path.resolve(__dirname, 'src/components/Text/index.tsx'),
        'components/Toggle/index': path.resolve(__dirname, 'src/components/Toggle/index.tsx'),
        'components/Tooltip/index': path.resolve(__dirname, 'src/components/Tooltip/index.tsx'),
        'components/UserCard/index': path.resolve(__dirname, 'src/components/UserCard/index.tsx'),
        'hooks/index': path.resolve(__dirname, 'src/hooks/index.ts'),
        'utils/index': path.resolve(__dirname, 'src/utils/index.ts'),
        'types/index': path.resolve(__dirname, 'src/types/index.ts'),
      },
      formats: ['es', 'cjs'],
      cssFileName: 'style'
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'qrcode', 'react-modal'],
      output: {
        preserveModules: false,
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
          'qrcode': 'QRCode',
          'react-modal': 'ReactModal'
        }
      },
    }
  },
  plugins: [
    react(),
    dts({
      outDir: 'dist',
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: ['src/**/*.stories.tsx'],
      entryRoot: 'src',
    }),
    svgr({
      svgrOptions: { exportType: "default", ref: true, svgo: false, titleProp: true },
      include: "**/*.svg",
    }),
    visualizer({ open: false }) as PluginOption,
  ],
})
