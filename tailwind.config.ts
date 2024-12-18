/* eslint-disable @typescript-eslint/no-explicit-any */
// tailwind.config.js
module.exports = {
    darkMode: ["class"],
    content: [
	  "./src/**/*.{js,jsx,ts,tsx}",
	  "./public/index.html",
	],
	theme: {
    	extend: {
    		
				animation: {
					'slide-in-left': 'slide-in-left 0.5s ease-out',
					scroll:
					
					  "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
				  },
				  keyframes: {
					scroll: {
					  to: {
						transform: "translate(calc(-50% - 0.5rem))",
					  },
					},
				  },
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
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
    				DEFAULT: 'hsl(var(--destructive))',
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
    		}
    	}
    },
	plugins: [import("tailwindcss-animate")],addVariablesForColors,
  };
  




  function addVariablesForColors({ addBase, theme }: any) {
	const allColors = flattenColorPalette(theme("colors"));
	const newVars = Object.fromEntries(
	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
   
	addBase({
	  ":root": newVars,
	});
  }

function flattenColorPalette(colors: any) {
	const result: any = {};

	function recurse(obj: any, current: string) {
		for (const key in obj) {
			const value = obj[key];
			const newKey = current ? `${current}-${key}` : key;
			if (typeof value === 'object' && value !== null) {
				recurse(value, newKey);
			} else {
				result[newKey] = value;
			}
		}
	}

	recurse(colors, '');
	return result;
}