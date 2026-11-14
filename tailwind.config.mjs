/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0B0F17',
        surface: {
          DEFAULT: '#131823',
          hover: '#182030',
          muted: '#1B2334',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          hover: 'rgba(255, 255, 255, 0.18)',
          accent: 'rgba(59, 130, 246, 0.35)',
        },
        accent: {
          DEFAULT: '#3B82F6',
          hover: '#60A5FA',
          subtle: 'rgba(59, 130, 246, 0.12)',
        },
        ocean: {
          DEFAULT: '#0EA5E9',
          hover: '#38BDF8',
          subtle: 'rgba(14, 165, 233, 0.12)',
          border: 'rgba(14, 165, 233, 0.3)',
        },
        content: {
          primary: '#E8EDF5',
          secondary: '#94A3B8',
          tertiary: '#64748B',
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
