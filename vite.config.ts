import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig, PluginOption } from 'vite'
import dts from 'vite-plugin-dts'
import svgr from 'vite-plugin-svgr'
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }]
  },
  build: {
    lib: {
      entry: {
        diditui: path.resolve(__dirname, 'src/index.ts'),
        tailwind: path.resolve(__dirname, 'src/tailwind.ts')
      },
      name: 'diditui',
      fileName: (format) => {
        const ext = format === 'es' ? 'js' : format;

        return `[name].${ext}`;
      },
      cssFileName: 'style' // Add this line
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        }
      },
    }
  },
  plugins: [
    react(),
    dts({ rollupTypes: true }),
    svgr({
      // svgr options: https://react-svgr.com/docs/options/
      svgrOptions: { exportType: "default", ref: true, svgo: false, titleProp: true },
      include: "**/*.svg",
    }),
    visualizer({ open: false }) as PluginOption,
  ],
})
