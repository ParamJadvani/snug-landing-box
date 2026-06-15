import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const reactCdnPaths = {
  react: "https://esm.sh/react@19.2.7",
  "react-dom": "https://esm.sh/react-dom@19.2.7",
  "react-dom/client": "https://esm.sh/react-dom@19.2.7/client",
  "react/jsx-runtime": "https://esm.sh/react@19.2.7/jsx-runtime",
  "react/jsx-dev-runtime": "https://esm.sh/react@19.2.7/jsx-dev-runtime",
};

const reactExternals = Object.keys(reactCdnPaths);

export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2022",
    cssTarget: "chrome111",
    cssCodeSplit: true,
    chunkSizeWarningLimit: 100,
    modulePreload: {
      polyfill: false,
    },
    reportCompressedSize: false,
    rolldownOptions: {
      external: reactExternals,
      output: {
        paths: reactCdnPaths,
        codeSplitting: {
          minSize: 20_000,
          maxSize: 100_000,
          maxModuleSize: 100_000,
          groups: [
            {
              name: "mui",
              test: /node_modules[\\/]@mui[\\/](material|system|utils|styled-engine|private-theming|types|core-downloads-tracker)/,
              priority: 60,
              minSize: 20_000,
              maxSize: 100_000,
              maxModuleSize: 100_000,
            },
            {
              name: "emotion",
              test: /node_modules[\\/]@emotion[\\/]/,
              priority: 55,
              minSize: 20_000,
              maxSize: 100_000,
              maxModuleSize: 100_000,
            },
            {
              name: "router",
              test: /node_modules[\\/]react-router/,
              priority: 50,
              minSize: 20_000,
              maxSize: 100_000,
              maxModuleSize: 100_000,
            },
            {
              name: "motion",
              test: /node_modules[\\/](framer-motion|motion-dom|motion-utils)/,
              priority: 45,
              minSize: 20_000,
              maxSize: 100_000,
              maxModuleSize: 100_000,
            },
            {
              name: "icons",
              test: /node_modules[\\/](@mui[\\/]icons-material|react-icons)/,
              priority: 40,
              minSize: 10_000,
              maxSize: 100_000,
              maxModuleSize: 100_000,
            },
            {
              name: "vendor",
              test: /node_modules/,
              priority: 20,
              minSize: 20_000,
              maxSize: 100_000,
              maxModuleSize: 100_000,
            },
            {
              name: "shared",
              test: /src\/components/,
              priority: 10,
              minShareCount: 2,
              minSize: 10_000,
              maxSize: 100_000,
              maxModuleSize: 100_000,
            },
          ],
        },
      },
    },
  },
  optimizeDeps: {
    include: [
      "@mui/material",
      "@mui/icons-material",
      "@emotion/react",
      "@emotion/styled",
    ],
  },
  define: {
    "process.env": {},
  },
});
