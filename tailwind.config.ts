import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '3xl': ['2rem', '2.5rem'] /* 32px 40px */,
      },
      spacing: {
        89: '22.25rem' /* 356px */,
      },
    },
  },
  plugins: [],
}
export default config
