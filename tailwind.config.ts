import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	fontFamily: {
		default: ["WayRayGrotesk", "sans-serif"]
	},
	screens: {
		'mobile': '360px', // [360, 820)
		'tablet': '820px', // [820, 1440)
		'laptop': '1440px', // >=1440
		// 'desktop': '1728px',

		'lg': '1024px',
	},
  	extend: {
  		colors: {
  			background: {
				DEFAULT: '#f8f8f9',
				primary: '#f8f8f9',
				secondary: '#a4a4a4'
			},
			primary: {
				// DEFAULT: '#cc2643',
				DEFAULT: '#0892D0',
				foreground: 'hsl(var(--primary-foreground))'
			},
			secondary: {
				DEFAULT: '#A2A2A2',	
				foreground: 'hsl(var(--secondary-foreground))'
			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: '#dc3545',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		keyframes: {
			slideDown: {
				from: { height: '0' },
				to: { height: 'var(--radix-collapsible-content-height)' },
			},
			slideUp: {
				from: { height: 'var(--radix-collapsible-content-height)' },
				to: { height: '0' },
			},
			fadeIn: {
				"0%": { opacity: "0" },
				"100%": { opacity: "1" },
			},
			fadeOut: {
				"0%": { opacity: "1" },
				"100%": { opacity: "0" },
			},
			scaleUp: {
				'0%': { transform: 'scale(0.95)' },
				'100%': { transform: 'scale(1)' },
			},
			scaleDown: {
				'0%': { transform: 'scale(1)' },
				'100%': { transform: 'scale(0.95)' },
			},
		},
		animation: {
			slideDown: 'slideDown 500ms ease-out',
			slideUp: 'slideUp 500ms ease-out',
			fadeIn: "fadeIn 1200ms ease-out",
			fadeOut: "fadeOut 1200ms ease-out",
			scaleUp: 'scaleUp 0.4s ease-in-out forwards',
        	scaleDown: 'scaleDown 0.4s ease-in-out forwards',
		},
  	}
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
export default config;
