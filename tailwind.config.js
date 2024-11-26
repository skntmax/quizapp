const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				black: colors.black,
				white: colors.white,
				emerald: colors.emerald,
				indigo: colors.indigo,
				yellow: colors.yellow,
				stone: colors.stone,
				sky: colors.sky,
				neutral: colors.neutral,
				gray: colors.gray,
				slate: colors.slate,
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
					DEFAULT: 'hsl(var(--primary))', // Blue
					foreground: 'hsl(var(----primary-foreground))', // White
				},
				secondary: {
					DEFAULT: '#818cf8', // Light Blue
					foreground: '#ffffff', // White
				},
				danger: {
					DEFAULT: '#fda4af', // Danger Red
					foreground: '#ffffff', // White text for contrast
				},
				success: {
					DEFAULT: '#6ee7b7', // Success Green
					foreground: '#ffffff', // White text for success background
				},
				info: {
					DEFAULT: '#38bdf8', // Info Blue
					foreground: '#ffffff', // White text
				},
				warning: {
					DEFAULT: '#fbbf24', // Warning Yellow
					foreground: '#111827', // Dark text for contrast
				},
				light: {
					DEFAULT: '#f3f4f6', // Light Gray
					foreground: '#111827', // Dark text for contrast
				},
				dark: {
					DEFAULT: '#1f2937', // Dark Gray
					foreground: '#ffffff', // White text
				},
				pink: {
					DEFAULT: '#ec4899', // Pink
					foreground: '#ffffff', // White text
				},
				violet: {
					DEFAULT: '#8b5cf6', // Violet
					foreground: '#ffffff', // White text
				},
				teal: {
					DEFAULT: '#14b8a6', // Teal
					foreground: '#ffffff', // White text
				},
				coral: {
					DEFAULT: '#ff6f61', // Coral
					foreground: '#ffffff', // White text
				},
				olive: {
					DEFAULT: '#6b8e23', // Olive Green
					foreground: '#ffffff', // White text
				},
				accent: {
					DEFAULT: '#a855f7', // Accent Purple
					foreground: '#ffffff', // White text
				},
				// Additional colors
				red: {
					DEFAULT: '#ef4444', // Red
					foreground: '#ffffff', // White text
				},
				orange: {
					DEFAULT: '#f97316', // Orange
					foreground: '#ffffff', // White text
				},
				amber: {
					DEFAULT: '#fbbf24', // Amber
					foreground: '#111827', // Dark text
				},
				yellow: {
					DEFAULT: '#eab308', // Yellow
					foreground: '#111827', // Dark text
				},
				lime: {
					DEFAULT: '#84cc16', // Lime
					foreground: '#111827', // Dark text
				},
				green: {
					DEFAULT: '#22c55e', // Green
					foreground: '#ffffff', // White text
				},
				emerald: {
					DEFAULT: '#10b981', // Emerald
					foreground: '#ffffff', // White text
				},
				cyan: {
					DEFAULT: '#06b6d4', // Cyan
					foreground: '#ffffff', // White text
				},
				sky: {
					DEFAULT: '#0ea5e9', // Sky Blue
					foreground: '#ffffff', // White text
				},
				blue: {
					DEFAULT: '#3b82f6', // Blue
					foreground: '#ffffff', // White text
				},
				indigo: {
					DEFAULT: '#4f46e5', // Indigo
					foreground: '#ffffff', // White text
				},
				purple: {
					DEFAULT: '#9333ea', // Purple
					foreground: '#ffffff', // White text
				},
				gray: {
					DEFAULT: '#6b7280', // Gray
					foreground: '#ffffff', // White text
				},
				slate: {
					DEFAULT: '#64748b', // Slate
					foreground: '#ffffff', // White text
				},
				zinc: {
					DEFAULT: '#3f3f46', // Zinc
					foreground: '#ffffff', // White text
				},
				neutral: {
					DEFAULT: '#a1a1aa', // Neutral
					foreground: '#ffffff', // White text
				},
				stone: {
					DEFAULT: '#a18f7d', // Stone
					foreground: '#ffffff', // White text
				},
				// More custom colors
				brown: {
					DEFAULT: '#7c4a4a', // Brown
					foreground: '#ffffff', // White text
				},
				teal: {
					DEFAULT: '#008080', // Teal
					foreground: '#ffffff', // White text
				},
				navy: {
					DEFAULT: '#001f3f', // Navy
					foreground: '#ffffff', // White text
				},
				beige: {
					DEFAULT: '#f5f5dc', // Beige
					foreground: '#111827', // Dark text
				},
				peach: {
					DEFAULT: '#ffcc99', // Peach
					foreground: '#111827', // Dark text
				},
				lavender: {
					DEFAULT: '#e6e6fa', // Lavender
					foreground: '#111827', // Dark text
				},
				mint: {
					DEFAULT: '#98ff98', // Mint
					foreground: '#111827', // Dark text
				},
				apricot: {
					DEFAULT: '#fbab60', // Apricot
					foreground: '#111827', // Dark text
				},
				// Additional neutral tones
				charcoal: {
					DEFAULT: '#36454f', // Charcoal
					foreground: '#ffffff', // White text
				},
				silver: {
					DEFAULT: '#c0c0c0', // Silver
					foreground: '#111827', // Dark text
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
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};