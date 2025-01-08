/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#010017',
        secondary: '#393A47',
        accent: '#F13024',
      },
      backgroundImage: {
        explosion: `url("${process.env.NEXT_PUBLIC_BASE_PATH || ''}/bg-explosion.png")`,
        circles: `url("${process.env.NEXT_PUBLIC_BASE_PATH || ''}/bg-circles.png")`,
        circleStar: `url("${process.env.NEXT_PUBLIC_BASE_PATH || ''}/circle-star.svg")`,
        site: `url("${process.env.NEXT_PUBLIC_BASE_PATH || ''}/site-bg.svg")`,
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
        'bg-stretch': 'bgStretch 6s ease-in-out infinite',
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, 'sans-serif'],
        sora: [`var(--font-sora)`, 'sans-serif'],
      },
      keyframes: {
        bgStretch: {
          '0%, 100%': {
            backgroundSize: '100% 100%',
          },
          '25%': {
            backgroundSize: '100% 90%',
          },
          '50%': {
            backgroundSize: '90% 100%',
          },
          '75%': {
            backgroundSize: '100% 100%',
          },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};

