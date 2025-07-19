/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "selector",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "circle-light": {
          "0%": { 
            transform: "translate(0px, 0px)",
            opacity: "0"
          },
          "5%": { 
            transform: "translate(0px, 0px)",
            opacity: "1"
          },
          "25%": { 
            transform: "translate(calc(100% - 12px), 0px)",
            opacity: "1"
          },
          "30%": { 
            transform: "translate(calc(100% - 12px), 0px)",
            opacity: "1"
          },
          "50%": { 
            transform: "translate(calc(100% - 12px), calc(100% - 12px))",
            opacity: "1"
          },
          "55%": { 
            transform: "translate(calc(100% - 12px), calc(100% - 12px))",
            opacity: "1"
          },
          "75%": { 
            transform: "translate(0px, calc(100% - 12px))",
            opacity: "1"
          },
          "80%": { 
            transform: "translate(0px, calc(100% - 12px))",
            opacity: "1"
          },
          "95%": { 
            transform: "translate(0px, 0px)",
            opacity: "1"
          },
          "100%": { 
            transform: "translate(0px, 0px)",
            opacity: "0"
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "circle-light": "circle-light 2.5s ease-in-out",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}