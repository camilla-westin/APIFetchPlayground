import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderColor: {
        'krisblue': '#58728d',
        'vaderyellow': '#FBB060',
        'polisred': '#FB0E0C',     
      },  
      backgroundColor: {
         'polisblue': '#1862A8'
      }    
    },
  },
  plugins: [],
}
export default config
