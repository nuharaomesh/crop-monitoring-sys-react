/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		height: {
  			'55': '54.5rem',
  			'96': '58rem',
  			'6/7': '90%',
  			'75v': '75vh',
  			'44v': '44vh',
  			'21r': '21rem'
  		},
  		width: {
  			'20%': '13%'
  		},
  		fontFamily: {
  			sans: [
  				'Poppins',
  				'sans-serif'
  			]
  		},
  		fontSize: {
  			'12p': '15px',
  			'20p': '20px'
  		},
  		borderRadius: {
  			custom: '90px 100px 34px 30px',
  			circle: '50%',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			customGray: '#7d7d7d',
  			dimgrey: 'dimgrey',
  			customBlue: 'rgb(34, 160, 199)',
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
  		},
  		padding: {
  			'14p': '14px'
  		},
  		boxShadow: {
  			'custom-circle': '10px 10px 0 white'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

