/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify the files Tailwind should scan for class names
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Custom font families
      fontFamily: {
        aeion: ['Aeion Mono', 'monospace'], // Custom Aeion font
        sans: ['Inter', 'sans-serif'],      // Default clean sans font
      },

      // Custom animations
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite', // Existing slow pulse effect
        'marquee': 'marquee 20s linear infinite', // Horizontal scrolling marquee effect
      },

      // Custom keyframes
      keyframes: {
        // Marquee effect for infinite horizontal scrolling
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
}
