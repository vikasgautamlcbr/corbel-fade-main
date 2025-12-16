import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

// Tab colors for border styling
const tabColors = {
  'tab-green': 'hsl(145, 60%, 45%)',
  'tab-teal': 'hsl(188, 85%, 51%)',
  'tab-purple': 'hsl(280, 60%, 55%)',
  'tab-blue': 'hsl(220, 70%, 55%)',
};

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
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
        navy: {
          DEFAULT: "hsl(var(--navy))",
          light: "hsl(var(--navy-light))",
        },
        cyan: {
          DEFAULT: "hsl(var(--cyan))",
        },
        teal: {
          DEFAULT: "hsl(var(--teal))",
        },
        tab: {
          green: "hsl(var(--tab-green))",
          teal: "hsl(var(--tab-teal))",
          purple: "hsl(var(--tab-purple))",
          blue: "hsl(var(--tab-blue))",
        },
      },
      borderColor: {
        'l-tab-green': 'hsl(var(--tab-green))',
        'l-tab-teal': 'hsl(var(--tab-teal))',
        'l-tab-purple': 'hsl(var(--tab-purple))',
        'l-tab-blue': 'hsl(var(--tab-blue))',
      },
      fontFamily: {
        corbel: ['Corbel', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "marquee-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-33.333%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(-33.333%)" },
          "100%": { transform: "translateX(0)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "scroll-down": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-33.333%)" },
        },
        "scroll-up": {
          "0%": { transform: "translateY(-33.333%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "marquee-left": "marquee-left 20s linear infinite",
        "marquee-right": "marquee-right 35s linear infinite",
        "marquee": "marquee 40s linear infinite",
        "scroll-down": "scroll-down 20s linear infinite",
        "scroll-up": "scroll-up 20s linear infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
