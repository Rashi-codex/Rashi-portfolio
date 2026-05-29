/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Inter'", "sans-serif"],
        display: ["'Outfit'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        primary: "#38BDF8", // Sky 400
        accent: "#818CF8", // Indigo 400
        bg: "#020617", // Slate 950
        card: "#0F172A", // Slate 900
        slateDark: "#F8FAFC", // Off-white for headings
        slateBody: "#94A3B8", // Light slate for body text
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.03)',
        'glass-hover': '0 8px 32px 0 rgba(124, 58, 237, 0.07)',
      }
    },
  },
  plugins: [],
}
