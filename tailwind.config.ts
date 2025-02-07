import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		keyframes: {
			"pop-blob": {
			"0%": { transform: "scale(1)" },
			"33%": { transform: "scale(1.2)" },
			"66%": { transform: "scale(0.8)" },
			"100%": { transform: "scale(1)" },
		  }
  		},
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
			  filter: {
				"blur-20": "blur(20px)",
				"blur-25": "blur(25px)",
			},
  		},
		  animation: {
			"pop-blob": "pop-blob 5s infinite",
		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
