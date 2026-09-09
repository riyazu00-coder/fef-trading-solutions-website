/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#05070d',
        panel: '#0b1220',
        steel: '#cbd5e1',
        electric: '#1da8ff',
        cyan: '#19d3d0',
        emerald: '#19d787',
        line: 'rgba(255, 255, 255, 0.12)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(to right, #1da8ff, #19d3d0, #19d787)',
        'fef-gradient': 'linear-gradient(to right, #1da8ff, #19d3d0, #19d787)',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(29, 168, 255, 0.25)',
        'emerald': '0 0 25px rgba(25, 215, 135, 0.25)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}
