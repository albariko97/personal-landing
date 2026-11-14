/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#09090B',
        surface: {
          DEFAULT: '#111114',
          hover: '#16161B',
          muted: '#18181D',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          hover: 'rgba(255, 255, 255, 0.20)',
          accent: 'rgba(59, 130, 246, 0.40)',
        },
        accent: {
          DEFAULT: '#3B82F6',
          hover: '#60A5FA',
          subtle: 'rgba(59, 130, 246, 0.12)',
        },
        content: {
          primary: '#F4F4F5',
          secondary: '#A1A1AA',
          tertiary: '#71717A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
};
