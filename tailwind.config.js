/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Убедитесь, что пути указаны правильно
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff5722", // Основной акцентный цвет
        secondary: "#d32f2f", // Вторичный акцентный цвет
        background: "#1e1e1e", // Фон для карточек и модального окна
        textPrimary: "#ffffff", // Основной цвет текста
        textSecondary: "#e0e0e0", // Вторичный цвет текста (параграфы)
      },
    },
  },
  plugins: [],
};
