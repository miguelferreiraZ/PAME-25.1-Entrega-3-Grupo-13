/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // paleta de cores personalizada
        'pink-primary': '#ec4772',
        'yellow-primary': '#fff67c', // Ajuste se necessário
        'burgundy': '#ba0a4c',
        'peach': '#fff1e5',
        'red-primary': '#ed0150',
        'pink-light': '#fe9cc1',
        
        // Cores do sistema (mantendo as originais)
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
}
