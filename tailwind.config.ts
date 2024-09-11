import { AccessibilityIcon } from "lucide-react";
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
			primary: 'var(--primary)',
			primaryForeground: 'var(--primary-foreground)',
			secondary: 'var(--secondary)',
			secondaryForeground: 'var(--secondary-foreground)',
			card: 'var(--card)',
			cardForeground: 'var(--card-foreground)',
			border: 'var(--border)',
			popover: 'var(--popover)',
			popoverForeground: 'var(--popover-foreground)',
			muted: 'var(--muted)',
			mutedForeground: 'var(--muted-foreground)',
			accent: 'var(--accent)',
			accentForeground: 'var(--accent-foreground)',
			destructive: 'var(--destructive)',
			destructiveForeground: 'var(--destructive-foreground)',
			input: 'var(--input)',
			ring: 'var(--ring)',
			radius: 'var(--radius)',
			chart1: 'var(--chart-1)',
			chart2: 'var(--chart-2)',
			chart3: 'var(--chart-3)',
			chart4: 'var(--chart-4)',
			chart5: 'var(--chart-5)',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
