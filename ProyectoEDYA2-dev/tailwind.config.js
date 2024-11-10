import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],      // Custom sans-serif fonts
        serif: ['Georgia', 'Times New Roman', 'serif'],  // Custom serif fonts
        mono: ['Courier New', 'Consolas', 'monospace'],  // Custom monospace fonts
        cursive: ['Brush Script MT', 'Comic Sans MS', 'cursive'], // Custom cursive fonts
        fantasy: ['Impact', 'Papyrus', 'fantasy'],       // Custom fantasy fonts
        system: ['system-ui', 'sans-serif'],
        titleSans: ['Poppins', 'Arial Black', 'sans-serif'],       // Bold, modern sans-serif
        titleSerif: ['Playfair Display', 'Georgia', 'serif'],      // Elegant serif font
        titleMono: ['Fira Code', 'Courier New', 'monospace'],      // Monospace for tech look
        titleDisplay: ['Oswald', 'Impact', 'fantasy'],             // Display style, bold and narrow
        titleCursive: ['Dancing Script', 'Brush Script MT', 'cursive'], // Handwritten cursive
        titleDecorative: ['Lobster', 'Pacifico', 'fantasy'],       // Decorative font for unique styles             // System UI font
      },
      colors: {
        navColor: '#1B325E',
        logButtonColor: "#171D25",
        teamBgColor: "#1C2C45",
        textColor1: "#C5C3C0",
        bgColor1: "#0B0819",
        logBgColor: "#480099"
      },
    },
  },
  plugins: [flowbite.plugin()],
};

