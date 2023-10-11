/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: ["class"],
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ["var(--font-sf)", "system-ui", "sans-serif"],
        default: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        // shadcn
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        // Fade up and down
        "fade-up": "fade-up 0.5s",
        "fade-down": "fade-down 0.5s",
        // Tooltip
        "slide-up-fade": "slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade": "slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        // shadcn
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        // Fade up and down
        "fade-up": {
          "0%": {
            opacity: 0,
            transform: "translateY(10px)",
          },
          "80%": {
            opacity: 0.6,
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
        "fade-down": {
          "0%": {
            opacity: 0,
            transform: "translateY(-10px)",
          },
          "80%": {
            opacity: 0.6,
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
        // Tooltip
        "slide-up-fade": {
          "0%": { opacity: 0, transform: "translateY(6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-down-fade": {
          "0%": { opacity: 0, transform: "translateY(-6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      // anima generated
      colors: {
        // shadcn
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
        // shadcn ends
        "m-3black": "var(--m-3black)",
        "m-3referrorerror-0": "var(--m-3referrorerror-0)",
        "m-3referrorerror-10": "var(--m-3referrorerror-10)",
        "m-3referrorerror-100": "var(--m-3referrorerror-100)",
        "m-3referrorerror-12": "var(--m-3referrorerror-12)",
        "m-3referrorerror-17": "var(--m-3referrorerror-17)",
        "m-3referrorerror-20": "var(--m-3referrorerror-20)",
        "m-3referrorerror-22": "var(--m-3referrorerror-22)",
        "m-3referrorerror-24": "var(--m-3referrorerror-24)",
        "m-3referrorerror-25": "var(--m-3referrorerror-25)",
        "m-3referrorerror-30": "var(--m-3referrorerror-30)",
        "m-3referrorerror-35": "var(--m-3referrorerror-35)",
        "m-3referrorerror-4": "var(--m-3referrorerror-4)",
        "m-3referrorerror-40": "var(--m-3referrorerror-40)",
        "m-3referrorerror-5": "var(--m-3referrorerror-5)",
        "m-3referrorerror-50": "var(--m-3referrorerror-50)",
        "m-3referrorerror-6": "var(--m-3referrorerror-6)",
        "m-3referrorerror-60": "var(--m-3referrorerror-60)",
        "m-3referrorerror-70": "var(--m-3referrorerror-70)",
        "m-3referrorerror-80": "var(--m-3referrorerror-80)",
        "m-3referrorerror-87": "var(--m-3referrorerror-87)",
        "m-3referrorerror-90": "var(--m-3referrorerror-90)",
        "m-3referrorerror-92": "var(--m-3referrorerror-92)",
        "m-3referrorerror-94": "var(--m-3referrorerror-94)",
        "m-3referrorerror-95": "var(--m-3referrorerror-95)",
        "m-3referrorerror-96": "var(--m-3referrorerror-96)",
        "m-3referrorerror-98": "var(--m-3referrorerror-98)",
        "m-3referrorerror-99": "var(--m-3referrorerror-99)",
        "m-3refneutralneutral-0": "var(--m-3refneutralneutral-0)",
        "m-3refneutralneutral-10": "var(--m-3refneutralneutral-10)",
        "m-3refneutralneutral-100": "var(--m-3refneutralneutral-100)",
        "m-3refneutralneutral-12": "var(--m-3refneutralneutral-12)",
        "m-3refneutralneutral-17": "var(--m-3refneutralneutral-17)",
        "m-3refneutralneutral-20": "var(--m-3refneutralneutral-20)",
        "m-3refneutralneutral-22": "var(--m-3refneutralneutral-22)",
        "m-3refneutralneutral-24": "var(--m-3refneutralneutral-24)",
        "m-3refneutralneutral-25": "var(--m-3refneutralneutral-25)",
        "m-3refneutralneutral-30": "var(--m-3refneutralneutral-30)",
        "m-3refneutralneutral-35": "var(--m-3refneutralneutral-35)",
        "m-3refneutralneutral-4": "var(--m-3refneutralneutral-4)",
        "m-3refneutralneutral-40": "var(--m-3refneutralneutral-40)",
        "m-3refneutralneutral-5": "var(--m-3refneutralneutral-5)",
        "m-3refneutralneutral-50": "var(--m-3refneutralneutral-50)",
        "m-3refneutralneutral-6": "var(--m-3refneutralneutral-6)",
        "m-3refneutralneutral-60": "var(--m-3refneutralneutral-60)",
        "m-3refneutralneutral-70": "var(--m-3refneutralneutral-70)",
        "m-3refneutralneutral-80": "var(--m-3refneutralneutral-80)",
        "m-3refneutralneutral-87": "var(--m-3refneutralneutral-87)",
        "m-3refneutralneutral-90": "var(--m-3refneutralneutral-90)",
        "m-3refneutralneutral-92": "var(--m-3refneutralneutral-92)",
        "m-3refneutralneutral-94": "var(--m-3refneutralneutral-94)",
        "m-3refneutralneutral-95": "var(--m-3refneutralneutral-95)",
        "m-3refneutralneutral-96": "var(--m-3refneutralneutral-96)",
        "m-3refneutralneutral-98": "var(--m-3refneutralneutral-98)",
        "m-3refneutralneutral-99": "var(--m-3refneutralneutral-99)",
        "m-3refprimaryprimary-0": "var(--m-3refprimaryprimary-0)",
        "m-3refprimaryprimary-10": "var(--m-3refprimaryprimary-10)",
        "m-3refprimaryprimary-100": "var(--m-3refprimaryprimary-100)",
        "m-3refprimaryprimary-12": "var(--m-3refprimaryprimary-12)",
        "m-3refprimaryprimary-17": "var(--m-3refprimaryprimary-17)",
        "m-3refprimaryprimary-20": "var(--m-3refprimaryprimary-20)",
        "m-3refprimaryprimary-22": "var(--m-3refprimaryprimary-22)",
        "m-3refprimaryprimary-24": "var(--m-3refprimaryprimary-24)",
        "m-3refprimaryprimary-25": "var(--m-3refprimaryprimary-25)",
        "m-3refprimaryprimary-30": "var(--m-3refprimaryprimary-30)",
        "m-3refprimaryprimary-35": "var(--m-3refprimaryprimary-35)",
        "m-3refprimaryprimary-4": "var(--m-3refprimaryprimary-4)",
        "m-3refprimaryprimary-40": "var(--m-3refprimaryprimary-40)",
        "m-3refprimaryprimary-5": "var(--m-3refprimaryprimary-5)",
        "m-3refprimaryprimary-50": "var(--m-3refprimaryprimary-50)",
        "m-3refprimaryprimary-6": "var(--m-3refprimaryprimary-6)",
        "m-3refprimaryprimary-60": "var(--m-3refprimaryprimary-60)",
        "m-3refprimaryprimary-70": "var(--m-3refprimaryprimary-70)",
        "m-3refprimaryprimary-80": "var(--m-3refprimaryprimary-80)",
        "m-3refprimaryprimary-87": "var(--m-3refprimaryprimary-87)",
        "m-3refprimaryprimary-90": "var(--m-3refprimaryprimary-90)",
        "m-3refprimaryprimary-92": "var(--m-3refprimaryprimary-92)",
        "m-3refprimaryprimary-94": "var(--m-3refprimaryprimary-94)",
        "m-3refprimaryprimary-95": "var(--m-3refprimaryprimary-95)",
        "m-3refprimaryprimary-96": "var(--m-3refprimaryprimary-96)",
        "m-3refprimaryprimary-98": "var(--m-3refprimaryprimary-98)",
        "m-3refprimaryprimary-99": "var(--m-3refprimaryprimary-99)",
        "m-3refsecondarysecondary-0": "var(--m-3refsecondarysecondary-0)",
        "m-3refsecondarysecondary-10": "var(--m-3refsecondarysecondary-10)",
        "m-3refsecondarysecondary-100": "var(--m-3refsecondarysecondary-100)",
        "m-3refsecondarysecondary-12": "var(--m-3refsecondarysecondary-12)",
        "m-3refsecondarysecondary-17": "var(--m-3refsecondarysecondary-17)",
        "m-3refsecondarysecondary-20": "var(--m-3refsecondarysecondary-20)",
        "m-3refsecondarysecondary-22": "var(--m-3refsecondarysecondary-22)",
        "m-3refsecondarysecondary-24": "var(--m-3refsecondarysecondary-24)",
        "m-3refsecondarysecondary-25": "var(--m-3refsecondarysecondary-25)",
        "m-3refsecondarysecondary-30": "var(--m-3refsecondarysecondary-30)",
        "m-3refsecondarysecondary-35": "var(--m-3refsecondarysecondary-35)",
        "m-3refsecondarysecondary-4": "var(--m-3refsecondarysecondary-4)",
        "m-3refsecondarysecondary-40": "var(--m-3refsecondarysecondary-40)",
        "m-3refsecondarysecondary-5": "var(--m-3refsecondarysecondary-5)",
        "m-3refsecondarysecondary-50": "var(--m-3refsecondarysecondary-50)",
        "m-3refsecondarysecondary-6": "var(--m-3refsecondarysecondary-6)",
        "m-3refsecondarysecondary-60": "var(--m-3refsecondarysecondary-60)",
        "m-3refsecondarysecondary-70": "var(--m-3refsecondarysecondary-70)",
        "m-3refsecondarysecondary-80": "var(--m-3refsecondarysecondary-80)",
        "m-3refsecondarysecondary-87": "var(--m-3refsecondarysecondary-87)",
        "m-3refsecondarysecondary-90": "var(--m-3refsecondarysecondary-90)",
        "m-3refsecondarysecondary-92": "var(--m-3refsecondarysecondary-92)",
        "m-3refsecondarysecondary-94": "var(--m-3refsecondarysecondary-94)",
        "m-3refsecondarysecondary-95": "var(--m-3refsecondarysecondary-95)",
        "m-3refsecondarysecondary-96": "var(--m-3refsecondarysecondary-96)",
        "m-3refsecondarysecondary-98": "var(--m-3refsecondarysecondary-98)",
        "m-3refsecondarysecondary-99": "var(--m-3refsecondarysecondary-99)",
        "m-3reftertiarytertiary-0": "var(--m-3reftertiarytertiary-0)",
        "m-3reftertiarytertiary-10": "var(--m-3reftertiarytertiary-10)",
        "m-3reftertiarytertiary-100": "var(--m-3reftertiarytertiary-100)",
        "m-3reftertiarytertiary-12": "var(--m-3reftertiarytertiary-12)",
        "m-3reftertiarytertiary-17": "var(--m-3reftertiarytertiary-17)",
        "m-3reftertiarytertiary-20": "var(--m-3reftertiarytertiary-20)",
        "m-3reftertiarytertiary-22": "var(--m-3reftertiarytertiary-22)",
        "m-3reftertiarytertiary-24": "var(--m-3reftertiarytertiary-24)",
        "m-3reftertiarytertiary-25": "var(--m-3reftertiarytertiary-25)",
        "m-3reftertiarytertiary-30": "var(--m-3reftertiarytertiary-30)",
        "m-3reftertiarytertiary-35": "var(--m-3reftertiarytertiary-35)",
        "m-3reftertiarytertiary-4": "var(--m-3reftertiarytertiary-4)",
        "m-3reftertiarytertiary-40": "var(--m-3reftertiarytertiary-40)",
        "m-3reftertiarytertiary-5": "var(--m-3reftertiarytertiary-5)",
        "m-3reftertiarytertiary-50": "var(--m-3reftertiarytertiary-50)",
        "m-3reftertiarytertiary-6": "var(--m-3reftertiarytertiary-6)",
        "m-3reftertiarytertiary-60": "var(--m-3reftertiarytertiary-60)",
        "m-3reftertiarytertiary-70": "var(--m-3reftertiarytertiary-70)",
        "m-3reftertiarytertiary-80": "var(--m-3reftertiarytertiary-80)",
        "m-3reftertiarytertiary-87": "var(--m-3reftertiarytertiary-87)",
        "m-3reftertiarytertiary-90": "var(--m-3reftertiarytertiary-90)",
        "m-3reftertiarytertiary-92": "var(--m-3reftertiarytertiary-92)",
        "m-3reftertiarytertiary-94": "var(--m-3reftertiarytertiary-94)",
        "m-3reftertiarytertiary-95": "var(--m-3reftertiarytertiary-95)",
        "m-3reftertiarytertiary-96": "var(--m-3reftertiarytertiary-96)",
        "m-3reftertiarytertiary-98": "var(--m-3reftertiarytertiary-98)",
        "m-3reftertiarytertiary-99": "var(--m-3reftertiarytertiary-99)",
        "m-3sourceseed": "var(--m-3sourceseed)",
        "m-3surfacesdarksurface-1": "var(--m-3surfacesdarksurface-1)",
        "m-3surfacesdarksurface-2": "var(--m-3surfacesdarksurface-2)",
        "m-3surfacesdarksurface-3": "var(--m-3surfacesdarksurface-3)",
        "m-3surfacesdarksurface-4": "var(--m-3surfacesdarksurface-4)",
        "m-3surfacesdarksurface-5": "var(--m-3surfacesdarksurface-5)",
        "m-3surfaceslightsurface-1": "var(--m-3surfaceslightsurface-1)",
        "m-3surfaceslightsurface-2": "var(--m-3surfaceslightsurface-2)",
        "m-3surfaceslightsurface-3": "var(--m-3surfaceslightsurface-3)",
        "m-3surfaceslightsurface-4": "var(--m-3surfaceslightsurface-4)",
        "m-3surfaceslightsurface-5": "var(--m-3surfaceslightsurface-5)",
        "m-3sysdarkbackground": "var(--m-3sysdarkbackground)",
        "m-3sysdarkerror": "var(--m-3sysdarkerror)",
        "m-3sysdarkoutline": "var(--m-3sysdarkoutline)",
        "m-3sysdarkprimary": "var(--m-3sysdarkprimary)",
        "m-3sysdarkscrim": "var(--m-3sysdarkscrim)",
        "m-3sysdarksecondary": "var(--m-3sysdarksecondary)",
        "m-3sysdarkshadow": "var(--m-3sysdarkshadow)",
        "m-3sysdarksurface": "var(--m-3sysdarksurface)",
        "m-3sysdarktertiary": "var(--m-3sysdarktertiary)",
        "m-3syslightbackground": "var(--m-3syslightbackground)",
        "m-3syslighterror": "var(--m-3syslighterror)",
        "m-3syslightoutline": "var(--m-3syslightoutline)",
        "m-3syslightprimary": "var(--m-3syslightprimary)",
        "m-3syslightscrim": "var(--m-3syslightscrim)",
        "m-3syslightsecondary": "var(--m-3syslightsecondary)",
        "m-3syslightshadow": "var(--m-3syslightshadow)",
        "m-3syslightsurface": "var(--m-3syslightsurface)",
        "m-3syslighttertiary": "var(--m-3syslighttertiary)",
        "m-3white": "var(--m-3white)",
        "m3key-colorsneutral": "var(--m3key-colorsneutral)",
        "m3key-colorsneutral-variant": "var(--m3key-colorsneutral-variant)",
        "m3key-colorsprimary": "var(--m3key-colorsprimary)",
        "m3key-colorssecondary": "var(--m3key-colorssecondary)",
        "m3key-colorstertiary": "var(--m3key-colorstertiary)",
        "m3refneutral-variantneutral-variant0":
          "var(--m3refneutral-variantneutral-variant0)",
        "m3refneutral-variantneutral-variant10":
          "var(--m3refneutral-variantneutral-variant10)",
        "m3refneutral-variantneutral-variant100":
          "var(--m3refneutral-variantneutral-variant100)",
        "m3refneutral-variantneutral-variant12":
          "var(--m3refneutral-variantneutral-variant12)",
        "m3refneutral-variantneutral-variant17":
          "var(--m3refneutral-variantneutral-variant17)",
        "m3refneutral-variantneutral-variant20":
          "var(--m3refneutral-variantneutral-variant20)",
        "m3refneutral-variantneutral-variant22":
          "var(--m3refneutral-variantneutral-variant22)",
        "m3refneutral-variantneutral-variant24":
          "var(--m3refneutral-variantneutral-variant24)",
        "m3refneutral-variantneutral-variant25":
          "var(--m3refneutral-variantneutral-variant25)",
        "m3refneutral-variantneutral-variant30":
          "var(--m3refneutral-variantneutral-variant30)",
        "m3refneutral-variantneutral-variant35":
          "var(--m3refneutral-variantneutral-variant35)",
        "m3refneutral-variantneutral-variant4":
          "var(--m3refneutral-variantneutral-variant4)",
        "m3refneutral-variantneutral-variant40":
          "var(--m3refneutral-variantneutral-variant40)",
        "m3refneutral-variantneutral-variant5":
          "var(--m3refneutral-variantneutral-variant5)",
        "m3refneutral-variantneutral-variant50":
          "var(--m3refneutral-variantneutral-variant50)",
        "m3refneutral-variantneutral-variant6":
          "var(--m3refneutral-variantneutral-variant6)",
        "m3refneutral-variantneutral-variant60":
          "var(--m3refneutral-variantneutral-variant60)",
        "m3refneutral-variantneutral-variant70":
          "var(--m3refneutral-variantneutral-variant70)",
        "m3refneutral-variantneutral-variant80":
          "var(--m3refneutral-variantneutral-variant80)",
        "m3refneutral-variantneutral-variant87":
          "var(--m3refneutral-variantneutral-variant87)",
        "m3refneutral-variantneutral-variant90":
          "var(--m3refneutral-variantneutral-variant90)",
        "m3refneutral-variantneutral-variant92":
          "var(--m3refneutral-variantneutral-variant92)",
        "m3refneutral-variantneutral-variant94":
          "var(--m3refneutral-variantneutral-variant94)",
        "m3refneutral-variantneutral-variant95":
          "var(--m3refneutral-variantneutral-variant95)",
        "m3refneutral-variantneutral-variant96":
          "var(--m3refneutral-variantneutral-variant96)",
        "m3refneutral-variantneutral-variant98":
          "var(--m3refneutral-variantneutral-variant98)",
        "m3refneutral-variantneutral-variant99":
          "var(--m3refneutral-variantneutral-variant99)",
        "m3state-layersdarkbackgroundopacity-008":
          "var(--m3state-layersdarkbackgroundopacity-008)",
        "m3state-layersdarkbackgroundopacity-012":
          "var(--m3state-layersdarkbackgroundopacity-012)",
        "m3state-layersdarkbackgroundopacity-016":
          "var(--m3state-layersdarkbackgroundopacity-016)",
        "m3state-layersdarkerror-containeropacity-008":
          "var(--m3state-layersdarkerror-containeropacity-008)",
        "m3state-layersdarkerror-containeropacity-012":
          "var(--m3state-layersdarkerror-containeropacity-012)",
        "m3state-layersdarkerror-containeropacity-016":
          "var(--m3state-layersdarkerror-containeropacity-016)",
        "m3state-layersdarkerroropacity-008":
          "var(--m3state-layersdarkerroropacity-008)",
        "m3state-layersdarkerroropacity-012":
          "var(--m3state-layersdarkerroropacity-012)",
        "m3state-layersdarkerroropacity-016":
          "var(--m3state-layersdarkerroropacity-016)",
        "m3state-layersdarkinverse-on-surfaceopacity-008":
          "var(--m3state-layersdarkinverse-on-surfaceopacity-008)",
        "m3state-layersdarkinverse-on-surfaceopacity-012":
          "var(--m3state-layersdarkinverse-on-surfaceopacity-012)",
        "m3state-layersdarkinverse-on-surfaceopacity-016":
          "var(--m3state-layersdarkinverse-on-surfaceopacity-016)",
        "m3state-layersdarkinverse-primaryopacity-008":
          "var(--m3state-layersdarkinverse-primaryopacity-008)",
        "m3state-layersdarkinverse-primaryopacity-012":
          "var(--m3state-layersdarkinverse-primaryopacity-012)",
        "m3state-layersdarkinverse-primaryopacity-016":
          "var(--m3state-layersdarkinverse-primaryopacity-016)",
        "m3state-layersdarkinverse-surfaceopacity-008":
          "var(--m3state-layersdarkinverse-surfaceopacity-008)",
        "m3state-layersdarkinverse-surfaceopacity-012":
          "var(--m3state-layersdarkinverse-surfaceopacity-012)",
        "m3state-layersdarkinverse-surfaceopacity-016":
          "var(--m3state-layersdarkinverse-surfaceopacity-016)",
        "m3state-layersdarkon-backgroundopacity-008":
          "var(--m3state-layersdarkon-backgroundopacity-008)",
        "m3state-layersdarkon-backgroundopacity-012":
          "var(--m3state-layersdarkon-backgroundopacity-012)",
        "m3state-layersdarkon-backgroundopacity-016":
          "var(--m3state-layersdarkon-backgroundopacity-016)",
        "m3state-layersdarkon-error-containeropacity-008":
          "var(--m3state-layersdarkon-error-containeropacity-008)",
        "m3state-layersdarkon-error-containeropacity-012":
          "var(--m3state-layersdarkon-error-containeropacity-012)",
        "m3state-layersdarkon-error-containeropacity-016":
          "var(--m3state-layersdarkon-error-containeropacity-016)",
        "m3state-layersdarkon-erroropacity-008":
          "var(--m3state-layersdarkon-erroropacity-008)",
        "m3state-layersdarkon-erroropacity-012":
          "var(--m3state-layersdarkon-erroropacity-012)",
        "m3state-layersdarkon-erroropacity-016":
          "var(--m3state-layersdarkon-erroropacity-016)",
        "m3state-layersdarkon-primary-containeropacity-008":
          "var(--m3state-layersdarkon-primary-containeropacity-008)",
        "m3state-layersdarkon-primary-containeropacity-012":
          "var(--m3state-layersdarkon-primary-containeropacity-012)",
        "m3state-layersdarkon-primary-containeropacity-016":
          "var(--m3state-layersdarkon-primary-containeropacity-016)",
        "m3state-layersdarkon-primary-fixed-variantopacity-008":
          "var(--m3state-layersdarkon-primary-fixed-variantopacity-008)",
        "m3state-layersdarkon-primary-fixed-variantopacity-012":
          "var(--m3state-layersdarkon-primary-fixed-variantopacity-012)",
        "m3state-layersdarkon-primary-fixed-variantopacity-016":
          "var(--m3state-layersdarkon-primary-fixed-variantopacity-016)",
        "m3state-layersdarkon-primary-fixedopacity-008":
          "var(--m3state-layersdarkon-primary-fixedopacity-008)",
        "m3state-layersdarkon-primary-fixedopacity-012":
          "var(--m3state-layersdarkon-primary-fixedopacity-012)",
        "m3state-layersdarkon-primary-fixedopacity-016":
          "var(--m3state-layersdarkon-primary-fixedopacity-016)",
        "m3state-layersdarkon-primaryopacity-008":
          "var(--m3state-layersdarkon-primaryopacity-008)",
        "m3state-layersdarkon-primaryopacity-012":
          "var(--m3state-layersdarkon-primaryopacity-012)",
        "m3state-layersdarkon-primaryopacity-016":
          "var(--m3state-layersdarkon-primaryopacity-016)",
        "m3state-layersdarkon-secondary-containeropacity-008":
          "var(--m3state-layersdarkon-secondary-containeropacity-008)",
        "m3state-layersdarkon-secondary-containeropacity-012":
          "var(--m3state-layersdarkon-secondary-containeropacity-012)",
        "m3state-layersdarkon-secondary-containeropacity-016":
          "var(--m3state-layersdarkon-secondary-containeropacity-016)",
        "m3state-layersdarkon-secondary-fixed-variantopacity-008":
          "var(--m3state-layersdarkon-secondary-fixed-variantopacity-008)",
        "m3state-layersdarkon-secondary-fixed-variantopacity-012":
          "var(--m3state-layersdarkon-secondary-fixed-variantopacity-012)",
        "m3state-layersdarkon-secondary-fixed-variantopacity-016":
          "var(--m3state-layersdarkon-secondary-fixed-variantopacity-016)",
        "m3state-layersdarkon-secondary-fixedopacity-008":
          "var(--m3state-layersdarkon-secondary-fixedopacity-008)",
        "m3state-layersdarkon-secondary-fixedopacity-012":
          "var(--m3state-layersdarkon-secondary-fixedopacity-012)",
        "m3state-layersdarkon-secondary-fixedopacity-016":
          "var(--m3state-layersdarkon-secondary-fixedopacity-016)",
        "m3state-layersdarkon-secondaryopacity-008":
          "var(--m3state-layersdarkon-secondaryopacity-008)",
        "m3state-layersdarkon-secondaryopacity-012":
          "var(--m3state-layersdarkon-secondaryopacity-012)",
        "m3state-layersdarkon-secondaryopacity-016":
          "var(--m3state-layersdarkon-secondaryopacity-016)",
        "m3state-layersdarkon-surface-variantopacity-008":
          "var(--m3state-layersdarkon-surface-variantopacity-008)",
        "m3state-layersdarkon-surface-variantopacity-012":
          "var(--m3state-layersdarkon-surface-variantopacity-012)",
        "m3state-layersdarkon-surface-variantopacity-016":
          "var(--m3state-layersdarkon-surface-variantopacity-016)",
        "m3state-layersdarkon-surfaceopacity-008":
          "var(--m3state-layersdarkon-surfaceopacity-008)",
        "m3state-layersdarkon-surfaceopacity-012":
          "var(--m3state-layersdarkon-surfaceopacity-012)",
        "m3state-layersdarkon-surfaceopacity-016":
          "var(--m3state-layersdarkon-surfaceopacity-016)",
        "m3state-layersdarkon-tertiary-containeropacity-008":
          "var(--m3state-layersdarkon-tertiary-containeropacity-008)",
        "m3state-layersdarkon-tertiary-containeropacity-012":
          "var(--m3state-layersdarkon-tertiary-containeropacity-012)",
        "m3state-layersdarkon-tertiary-containeropacity-016":
          "var(--m3state-layersdarkon-tertiary-containeropacity-016)",
        "m3state-layersdarkon-tertiary-fixed-variantopacity-008":
          "var(--m3state-layersdarkon-tertiary-fixed-variantopacity-008)",
        "m3state-layersdarkon-tertiary-fixed-variantopacity-012":
          "var(--m3state-layersdarkon-tertiary-fixed-variantopacity-012)",
        "m3state-layersdarkon-tertiary-fixed-variantopacity-016":
          "var(--m3state-layersdarkon-tertiary-fixed-variantopacity-016)",
        "m3state-layersdarkon-tertiary-fixedopacity-008":
          "var(--m3state-layersdarkon-tertiary-fixedopacity-008)",
        "m3state-layersdarkon-tertiary-fixedopacity-012":
          "var(--m3state-layersdarkon-tertiary-fixedopacity-012)",
        "m3state-layersdarkon-tertiary-fixedopacity-016":
          "var(--m3state-layersdarkon-tertiary-fixedopacity-016)",
        "m3state-layersdarkon-tertiaryopacity-008":
          "var(--m3state-layersdarkon-tertiaryopacity-008)",
        "m3state-layersdarkon-tertiaryopacity-012":
          "var(--m3state-layersdarkon-tertiaryopacity-012)",
        "m3state-layersdarkon-tertiaryopacity-016":
          "var(--m3state-layersdarkon-tertiaryopacity-016)",
        "m3state-layersdarkoutline-variantopacity-008":
          "var(--m3state-layersdarkoutline-variantopacity-008)",
        "m3state-layersdarkoutline-variantopacity-012":
          "var(--m3state-layersdarkoutline-variantopacity-012)",
        "m3state-layersdarkoutline-variantopacity-016":
          "var(--m3state-layersdarkoutline-variantopacity-016)",
        "m3state-layersdarkoutlineopacity-008":
          "var(--m3state-layersdarkoutlineopacity-008)",
        "m3state-layersdarkoutlineopacity-012":
          "var(--m3state-layersdarkoutlineopacity-012)",
        "m3state-layersdarkoutlineopacity-016":
          "var(--m3state-layersdarkoutlineopacity-016)",
        "m3state-layersdarkprimary-containeropacity-008":
          "var(--m3state-layersdarkprimary-containeropacity-008)",
        "m3state-layersdarkprimary-containeropacity-012":
          "var(--m3state-layersdarkprimary-containeropacity-012)",
        "m3state-layersdarkprimary-containeropacity-016":
          "var(--m3state-layersdarkprimary-containeropacity-016)",
        "m3state-layersdarkprimary-fixed-dimopacity-008":
          "var(--m3state-layersdarkprimary-fixed-dimopacity-008)",
        "m3state-layersdarkprimary-fixed-dimopacity-012":
          "var(--m3state-layersdarkprimary-fixed-dimopacity-012)",
        "m3state-layersdarkprimary-fixed-dimopacity-016":
          "var(--m3state-layersdarkprimary-fixed-dimopacity-016)",
        "m3state-layersdarkprimary-fixedopacity-008":
          "var(--m3state-layersdarkprimary-fixedopacity-008)",
        "m3state-layersdarkprimary-fixedopacity-012":
          "var(--m3state-layersdarkprimary-fixedopacity-012)",
        "m3state-layersdarkprimary-fixedopacity-016":
          "var(--m3state-layersdarkprimary-fixedopacity-016)",
        "m3state-layersdarkprimaryopacity-008":
          "var(--m3state-layersdarkprimaryopacity-008)",
        "m3state-layersdarkprimaryopacity-012":
          "var(--m3state-layersdarkprimaryopacity-012)",
        "m3state-layersdarkprimaryopacity-016":
          "var(--m3state-layersdarkprimaryopacity-016)",
        "m3state-layersdarkscrimopacity-008":
          "var(--m3state-layersdarkscrimopacity-008)",
        "m3state-layersdarkscrimopacity-012":
          "var(--m3state-layersdarkscrimopacity-012)",
        "m3state-layersdarkscrimopacity-016":
          "var(--m3state-layersdarkscrimopacity-016)",
        "m3state-layersdarksecondary-containeropacity-008":
          "var(--m3state-layersdarksecondary-containeropacity-008)",
        "m3state-layersdarksecondary-containeropacity-012":
          "var(--m3state-layersdarksecondary-containeropacity-012)",
        "m3state-layersdarksecondary-containeropacity-016":
          "var(--m3state-layersdarksecondary-containeropacity-016)",
        "m3state-layersdarksecondary-fixed-dimopacity-008":
          "var(--m3state-layersdarksecondary-fixed-dimopacity-008)",
        "m3state-layersdarksecondary-fixed-dimopacity-012":
          "var(--m3state-layersdarksecondary-fixed-dimopacity-012)",
        "m3state-layersdarksecondary-fixed-dimopacity-016":
          "var(--m3state-layersdarksecondary-fixed-dimopacity-016)",
        "m3state-layersdarksecondary-fixedopacity-008":
          "var(--m3state-layersdarksecondary-fixedopacity-008)",
        "m3state-layersdarksecondary-fixedopacity-012":
          "var(--m3state-layersdarksecondary-fixedopacity-012)",
        "m3state-layersdarksecondary-fixedopacity-016":
          "var(--m3state-layersdarksecondary-fixedopacity-016)",
        "m3state-layersdarksecondaryopacity-008":
          "var(--m3state-layersdarksecondaryopacity-008)",
        "m3state-layersdarksecondaryopacity-012":
          "var(--m3state-layersdarksecondaryopacity-012)",
        "m3state-layersdarksecondaryopacity-016":
          "var(--m3state-layersdarksecondaryopacity-016)",
        "m3state-layersdarkshadowopacity-008":
          "var(--m3state-layersdarkshadowopacity-008)",
        "m3state-layersdarkshadowopacity-012":
          "var(--m3state-layersdarkshadowopacity-012)",
        "m3state-layersdarkshadowopacity-016":
          "var(--m3state-layersdarkshadowopacity-016)",
        "m3state-layersdarksurface-brightopacity-008":
          "var(--m3state-layersdarksurface-brightopacity-008)",
        "m3state-layersdarksurface-brightopacity-012":
          "var(--m3state-layersdarksurface-brightopacity-012)",
        "m3state-layersdarksurface-brightopacity-016":
          "var(--m3state-layersdarksurface-brightopacity-016)",
        "m3state-layersdarksurface-container-highestopacity-008":
          "var(--m3state-layersdarksurface-container-highestopacity-008)",
        "m3state-layersdarksurface-container-highestopacity-012":
          "var(--m3state-layersdarksurface-container-highestopacity-012)",
        "m3state-layersdarksurface-container-highestopacity-016":
          "var(--m3state-layersdarksurface-container-highestopacity-016)",
        "m3state-layersdarksurface-container-highopacity-008":
          "var(--m3state-layersdarksurface-container-highopacity-008)",
        "m3state-layersdarksurface-container-highopacity-012":
          "var(--m3state-layersdarksurface-container-highopacity-012)",
        "m3state-layersdarksurface-container-highopacity-016":
          "var(--m3state-layersdarksurface-container-highopacity-016)",
        "m3state-layersdarksurface-container-lowestopacity-008":
          "var(--m3state-layersdarksurface-container-lowestopacity-008)",
        "m3state-layersdarksurface-container-lowestopacity-012":
          "var(--m3state-layersdarksurface-container-lowestopacity-012)",
        "m3state-layersdarksurface-container-lowestopacity-016":
          "var(--m3state-layersdarksurface-container-lowestopacity-016)",
        "m3state-layersdarksurface-container-lowopacity-008":
          "var(--m3state-layersdarksurface-container-lowopacity-008)",
        "m3state-layersdarksurface-container-lowopacity-012":
          "var(--m3state-layersdarksurface-container-lowopacity-012)",
        "m3state-layersdarksurface-container-lowopacity-016":
          "var(--m3state-layersdarksurface-container-lowopacity-016)",
        "m3state-layersdarksurface-containeropacity-008":
          "var(--m3state-layersdarksurface-containeropacity-008)",
        "m3state-layersdarksurface-containeropacity-012":
          "var(--m3state-layersdarksurface-containeropacity-012)",
        "m3state-layersdarksurface-containeropacity-016":
          "var(--m3state-layersdarksurface-containeropacity-016)",
        "m3state-layersdarksurface-dimopacity-008":
          "var(--m3state-layersdarksurface-dimopacity-008)",
        "m3state-layersdarksurface-dimopacity-012":
          "var(--m3state-layersdarksurface-dimopacity-012)",
        "m3state-layersdarksurface-dimopacity-016":
          "var(--m3state-layersdarksurface-dimopacity-016)",
        "m3state-layersdarksurface-tintopacity-008":
          "var(--m3state-layersdarksurface-tintopacity-008)",
        "m3state-layersdarksurface-tintopacity-012":
          "var(--m3state-layersdarksurface-tintopacity-012)",
        "m3state-layersdarksurface-tintopacity-016":
          "var(--m3state-layersdarksurface-tintopacity-016)",
        "m3state-layersdarksurface-variantopacity-008":
          "var(--m3state-layersdarksurface-variantopacity-008)",
        "m3state-layersdarksurface-variantopacity-012":
          "var(--m3state-layersdarksurface-variantopacity-012)",
        "m3state-layersdarksurface-variantopacity-016":
          "var(--m3state-layersdarksurface-variantopacity-016)",
        "m3state-layersdarksurfaceopacity-008":
          "var(--m3state-layersdarksurfaceopacity-008)",
        "m3state-layersdarksurfaceopacity-012":
          "var(--m3state-layersdarksurfaceopacity-012)",
        "m3state-layersdarksurfaceopacity-016":
          "var(--m3state-layersdarksurfaceopacity-016)",
        "m3state-layersdarktertiary-containeropacity-008":
          "var(--m3state-layersdarktertiary-containeropacity-008)",
        "m3state-layersdarktertiary-containeropacity-012":
          "var(--m3state-layersdarktertiary-containeropacity-012)",
        "m3state-layersdarktertiary-containeropacity-016":
          "var(--m3state-layersdarktertiary-containeropacity-016)",
        "m3state-layersdarktertiary-fixed-dimopacity-008":
          "var(--m3state-layersdarktertiary-fixed-dimopacity-008)",
        "m3state-layersdarktertiary-fixed-dimopacity-012":
          "var(--m3state-layersdarktertiary-fixed-dimopacity-012)",
        "m3state-layersdarktertiary-fixed-dimopacity-016":
          "var(--m3state-layersdarktertiary-fixed-dimopacity-016)",
        "m3state-layersdarktertiary-fixedopacity-008":
          "var(--m3state-layersdarktertiary-fixedopacity-008)",
        "m3state-layersdarktertiary-fixedopacity-012":
          "var(--m3state-layersdarktertiary-fixedopacity-012)",
        "m3state-layersdarktertiary-fixedopacity-016":
          "var(--m3state-layersdarktertiary-fixedopacity-016)",
        "m3state-layersdarktertiaryopacity-008":
          "var(--m3state-layersdarktertiaryopacity-008)",
        "m3state-layersdarktertiaryopacity-012":
          "var(--m3state-layersdarktertiaryopacity-012)",
        "m3state-layersdarktertiaryopacity-016":
          "var(--m3state-layersdarktertiaryopacity-016)",
        "m3state-layerslightbackgroundopacity-008":
          "var(--m3state-layerslightbackgroundopacity-008)",
        "m3state-layerslightbackgroundopacity-012":
          "var(--m3state-layerslightbackgroundopacity-012)",
        "m3state-layerslightbackgroundopacity-016":
          "var(--m3state-layerslightbackgroundopacity-016)",
        "m3state-layerslighterror-containeropacity-008":
          "var(--m3state-layerslighterror-containeropacity-008)",
        "m3state-layerslighterror-containeropacity-012":
          "var(--m3state-layerslighterror-containeropacity-012)",
        "m3state-layerslighterror-containeropacity-016":
          "var(--m3state-layerslighterror-containeropacity-016)",
        "m3state-layerslighterroropacity-008":
          "var(--m3state-layerslighterroropacity-008)",
        "m3state-layerslighterroropacity-012":
          "var(--m3state-layerslighterroropacity-012)",
        "m3state-layerslighterroropacity-016":
          "var(--m3state-layerslighterroropacity-016)",
        "m3state-layerslightinverse-on-surfaceopacity-008":
          "var(--m3state-layerslightinverse-on-surfaceopacity-008)",
        "m3state-layerslightinverse-on-surfaceopacity-012":
          "var(--m3state-layerslightinverse-on-surfaceopacity-012)",
        "m3state-layerslightinverse-on-surfaceopacity-016":
          "var(--m3state-layerslightinverse-on-surfaceopacity-016)",
        "m3state-layerslightinverse-primaryopacity-008":
          "var(--m3state-layerslightinverse-primaryopacity-008)",
        "m3state-layerslightinverse-primaryopacity-012":
          "var(--m3state-layerslightinverse-primaryopacity-012)",
        "m3state-layerslightinverse-primaryopacity-016":
          "var(--m3state-layerslightinverse-primaryopacity-016)",
        "m3state-layerslightinverse-surfaceopacity-008":
          "var(--m3state-layerslightinverse-surfaceopacity-008)",
        "m3state-layerslightinverse-surfaceopacity-012":
          "var(--m3state-layerslightinverse-surfaceopacity-012)",
        "m3state-layerslightinverse-surfaceopacity-016":
          "var(--m3state-layerslightinverse-surfaceopacity-016)",
        "m3state-layerslighton-backgroundopacity-008":
          "var(--m3state-layerslighton-backgroundopacity-008)",
        "m3state-layerslighton-backgroundopacity-012":
          "var(--m3state-layerslighton-backgroundopacity-012)",
        "m3state-layerslighton-backgroundopacity-016":
          "var(--m3state-layerslighton-backgroundopacity-016)",
        "m3state-layerslighton-error-containeropacity-008":
          "var(--m3state-layerslighton-error-containeropacity-008)",
        "m3state-layerslighton-error-containeropacity-012":
          "var(--m3state-layerslighton-error-containeropacity-012)",
        "m3state-layerslighton-error-containeropacity-016":
          "var(--m3state-layerslighton-error-containeropacity-016)",
        "m3state-layerslighton-erroropacity-008":
          "var(--m3state-layerslighton-erroropacity-008)",
        "m3state-layerslighton-erroropacity-012":
          "var(--m3state-layerslighton-erroropacity-012)",
        "m3state-layerslighton-erroropacity-016":
          "var(--m3state-layerslighton-erroropacity-016)",
        "m3state-layerslighton-primary-containeropacity-008":
          "var(--m3state-layerslighton-primary-containeropacity-008)",
        "m3state-layerslighton-primary-containeropacity-012":
          "var(--m3state-layerslighton-primary-containeropacity-012)",
        "m3state-layerslighton-primary-containeropacity-016":
          "var(--m3state-layerslighton-primary-containeropacity-016)",
        "m3state-layerslighton-primary-fixed-variantopacity-008":
          "var(--m3state-layerslighton-primary-fixed-variantopacity-008)",
        "m3state-layerslighton-primary-fixed-variantopacity-012":
          "var(--m3state-layerslighton-primary-fixed-variantopacity-012)",
        "m3state-layerslighton-primary-fixed-variantopacity-016":
          "var(--m3state-layerslighton-primary-fixed-variantopacity-016)",
        "m3state-layerslighton-primary-fixedopacity-008":
          "var(--m3state-layerslighton-primary-fixedopacity-008)",
        "m3state-layerslighton-primary-fixedopacity-012":
          "var(--m3state-layerslighton-primary-fixedopacity-012)",
        "m3state-layerslighton-primary-fixedopacity-016":
          "var(--m3state-layerslighton-primary-fixedopacity-016)",
        "m3state-layerslighton-primaryopacity-008":
          "var(--m3state-layerslighton-primaryopacity-008)",
        "m3state-layerslighton-primaryopacity-012":
          "var(--m3state-layerslighton-primaryopacity-012)",
        "m3state-layerslighton-primaryopacity-016":
          "var(--m3state-layerslighton-primaryopacity-016)",
        "m3state-layerslighton-secondary-containeropacity-008":
          "var(--m3state-layerslighton-secondary-containeropacity-008)",
        "m3state-layerslighton-secondary-containeropacity-012":
          "var(--m3state-layerslighton-secondary-containeropacity-012)",
        "m3state-layerslighton-secondary-containeropacity-016":
          "var(--m3state-layerslighton-secondary-containeropacity-016)",
        "m3state-layerslighton-secondary-fixed-variantopacity-008":
          "var(--m3state-layerslighton-secondary-fixed-variantopacity-008)",
        "m3state-layerslighton-secondary-fixed-variantopacity-012":
          "var(--m3state-layerslighton-secondary-fixed-variantopacity-012)",
        "m3state-layerslighton-secondary-fixed-variantopacity-016":
          "var(--m3state-layerslighton-secondary-fixed-variantopacity-016)",
        "m3state-layerslighton-secondary-fixedopacity-008":
          "var(--m3state-layerslighton-secondary-fixedopacity-008)",
        "m3state-layerslighton-secondary-fixedopacity-012":
          "var(--m3state-layerslighton-secondary-fixedopacity-012)",
        "m3state-layerslighton-secondary-fixedopacity-016":
          "var(--m3state-layerslighton-secondary-fixedopacity-016)",
        "m3state-layerslighton-secondaryopacity-008":
          "var(--m3state-layerslighton-secondaryopacity-008)",
        "m3state-layerslighton-secondaryopacity-012":
          "var(--m3state-layerslighton-secondaryopacity-012)",
        "m3state-layerslighton-secondaryopacity-016":
          "var(--m3state-layerslighton-secondaryopacity-016)",
        "m3state-layerslighton-surface-variantopacity-008":
          "var(--m3state-layerslighton-surface-variantopacity-008)",
        "m3state-layerslighton-surface-variantopacity-012":
          "var(--m3state-layerslighton-surface-variantopacity-012)",
        "m3state-layerslighton-surface-variantopacity-016":
          "var(--m3state-layerslighton-surface-variantopacity-016)",
        "m3state-layerslighton-surfaceopacity-008":
          "var(--m3state-layerslighton-surfaceopacity-008)",
        "m3state-layerslighton-surfaceopacity-012":
          "var(--m3state-layerslighton-surfaceopacity-012)",
        "m3state-layerslighton-surfaceopacity-016":
          "var(--m3state-layerslighton-surfaceopacity-016)",
        "m3state-layerslighton-tertiary-containeropacity-008":
          "var(--m3state-layerslighton-tertiary-containeropacity-008)",
        "m3state-layerslighton-tertiary-containeropacity-012":
          "var(--m3state-layerslighton-tertiary-containeropacity-012)",
        "m3state-layerslighton-tertiary-containeropacity-016":
          "var(--m3state-layerslighton-tertiary-containeropacity-016)",
        "m3state-layerslighton-tertiary-fixed-variantopacity-008":
          "var(--m3state-layerslighton-tertiary-fixed-variantopacity-008)",
        "m3state-layerslighton-tertiary-fixed-variantopacity-012":
          "var(--m3state-layerslighton-tertiary-fixed-variantopacity-012)",
        "m3state-layerslighton-tertiary-fixed-variantopacity-016":
          "var(--m3state-layerslighton-tertiary-fixed-variantopacity-016)",
        "m3state-layerslighton-tertiary-fixedopacity-008":
          "var(--m3state-layerslighton-tertiary-fixedopacity-008)",
        "m3state-layerslighton-tertiary-fixedopacity-012":
          "var(--m3state-layerslighton-tertiary-fixedopacity-012)",
        "m3state-layerslighton-tertiary-fixedopacity-016":
          "var(--m3state-layerslighton-tertiary-fixedopacity-016)",
        "m3state-layerslighton-tertiaryopacity-008":
          "var(--m3state-layerslighton-tertiaryopacity-008)",
        "m3state-layerslighton-tertiaryopacity-012":
          "var(--m3state-layerslighton-tertiaryopacity-012)",
        "m3state-layerslighton-tertiaryopacity-016":
          "var(--m3state-layerslighton-tertiaryopacity-016)",
        "m3state-layerslightoutline-variantopacity-008":
          "var(--m3state-layerslightoutline-variantopacity-008)",
        "m3state-layerslightoutline-variantopacity-012":
          "var(--m3state-layerslightoutline-variantopacity-012)",
        "m3state-layerslightoutline-variantopacity-016":
          "var(--m3state-layerslightoutline-variantopacity-016)",
        "m3state-layerslightoutlineopacity-008":
          "var(--m3state-layerslightoutlineopacity-008)",
        "m3state-layerslightoutlineopacity-012":
          "var(--m3state-layerslightoutlineopacity-012)",
        "m3state-layerslightoutlineopacity-016":
          "var(--m3state-layerslightoutlineopacity-016)",
        "m3state-layerslightprimary-containeropacity-008":
          "var(--m3state-layerslightprimary-containeropacity-008)",
        "m3state-layerslightprimary-containeropacity-012":
          "var(--m3state-layerslightprimary-containeropacity-012)",
        "m3state-layerslightprimary-containeropacity-016":
          "var(--m3state-layerslightprimary-containeropacity-016)",
        "m3state-layerslightprimary-fixed-dimopacity-008":
          "var(--m3state-layerslightprimary-fixed-dimopacity-008)",
        "m3state-layerslightprimary-fixed-dimopacity-012":
          "var(--m3state-layerslightprimary-fixed-dimopacity-012)",
        "m3state-layerslightprimary-fixed-dimopacity-016":
          "var(--m3state-layerslightprimary-fixed-dimopacity-016)",
        "m3state-layerslightprimary-fixedopacity-008":
          "var(--m3state-layerslightprimary-fixedopacity-008)",
        "m3state-layerslightprimary-fixedopacity-012":
          "var(--m3state-layerslightprimary-fixedopacity-012)",
        "m3state-layerslightprimary-fixedopacity-016":
          "var(--m3state-layerslightprimary-fixedopacity-016)",
        "m3state-layerslightprimaryopacity-008":
          "var(--m3state-layerslightprimaryopacity-008)",
        "m3state-layerslightprimaryopacity-012":
          "var(--m3state-layerslightprimaryopacity-012)",
        "m3state-layerslightprimaryopacity-016":
          "var(--m3state-layerslightprimaryopacity-016)",
        "m3state-layerslightscrimopacity-008":
          "var(--m3state-layerslightscrimopacity-008)",
        "m3state-layerslightscrimopacity-012":
          "var(--m3state-layerslightscrimopacity-012)",
        "m3state-layerslightscrimopacity-016":
          "var(--m3state-layerslightscrimopacity-016)",
        "m3state-layerslightsecondary-containeropacity-008":
          "var(--m3state-layerslightsecondary-containeropacity-008)",
        "m3state-layerslightsecondary-containeropacity-012":
          "var(--m3state-layerslightsecondary-containeropacity-012)",
        "m3state-layerslightsecondary-containeropacity-016":
          "var(--m3state-layerslightsecondary-containeropacity-016)",
        "m3state-layerslightsecondary-fixed-dimopacity-008":
          "var(--m3state-layerslightsecondary-fixed-dimopacity-008)",
        "m3state-layerslightsecondary-fixed-dimopacity-012":
          "var(--m3state-layerslightsecondary-fixed-dimopacity-012)",
        "m3state-layerslightsecondary-fixed-dimopacity-016":
          "var(--m3state-layerslightsecondary-fixed-dimopacity-016)",
        "m3state-layerslightsecondary-fixedopacity-008":
          "var(--m3state-layerslightsecondary-fixedopacity-008)",
        "m3state-layerslightsecondary-fixedopacity-012":
          "var(--m3state-layerslightsecondary-fixedopacity-012)",
        "m3state-layerslightsecondary-fixedopacity-016":
          "var(--m3state-layerslightsecondary-fixedopacity-016)",
        "m3state-layerslightsecondaryopacity-008":
          "var(--m3state-layerslightsecondaryopacity-008)",
        "m3state-layerslightsecondaryopacity-012":
          "var(--m3state-layerslightsecondaryopacity-012)",
        "m3state-layerslightsecondaryopacity-016":
          "var(--m3state-layerslightsecondaryopacity-016)",
        "m3state-layerslightshadowopacity-008":
          "var(--m3state-layerslightshadowopacity-008)",
        "m3state-layerslightshadowopacity-012":
          "var(--m3state-layerslightshadowopacity-012)",
        "m3state-layerslightshadowopacity-016":
          "var(--m3state-layerslightshadowopacity-016)",
        "m3state-layerslightsurface-brightopacity-008":
          "var(--m3state-layerslightsurface-brightopacity-008)",
        "m3state-layerslightsurface-brightopacity-012":
          "var(--m3state-layerslightsurface-brightopacity-012)",
        "m3state-layerslightsurface-brightopacity-016":
          "var(--m3state-layerslightsurface-brightopacity-016)",
        "m3state-layerslightsurface-container-highestopacity-008":
          "var(--m3state-layerslightsurface-container-highestopacity-008)",
        "m3state-layerslightsurface-container-highestopacity-012":
          "var(--m3state-layerslightsurface-container-highestopacity-012)",
        "m3state-layerslightsurface-container-highestopacity-016":
          "var(--m3state-layerslightsurface-container-highestopacity-016)",
        "m3state-layerslightsurface-container-highopacity-008":
          "var(--m3state-layerslightsurface-container-highopacity-008)",
        "m3state-layerslightsurface-container-highopacity-012":
          "var(--m3state-layerslightsurface-container-highopacity-012)",
        "m3state-layerslightsurface-container-highopacity-016":
          "var(--m3state-layerslightsurface-container-highopacity-016)",
        "m3state-layerslightsurface-container-lowestopacity-008":
          "var(--m3state-layerslightsurface-container-lowestopacity-008)",
        "m3state-layerslightsurface-container-lowestopacity-012":
          "var(--m3state-layerslightsurface-container-lowestopacity-012)",
        "m3state-layerslightsurface-container-lowestopacity-016":
          "var(--m3state-layerslightsurface-container-lowestopacity-016)",
        "m3state-layerslightsurface-container-lowopacity-008":
          "var(--m3state-layerslightsurface-container-lowopacity-008)",
        "m3state-layerslightsurface-container-lowopacity-012":
          "var(--m3state-layerslightsurface-container-lowopacity-012)",
        "m3state-layerslightsurface-container-lowopacity-016":
          "var(--m3state-layerslightsurface-container-lowopacity-016)",
        "m3state-layerslightsurface-containeropacity-008":
          "var(--m3state-layerslightsurface-containeropacity-008)",
        "m3state-layerslightsurface-containeropacity-012":
          "var(--m3state-layerslightsurface-containeropacity-012)",
        "m3state-layerslightsurface-containeropacity-016":
          "var(--m3state-layerslightsurface-containeropacity-016)",
        "m3state-layerslightsurface-dimopacity-008":
          "var(--m3state-layerslightsurface-dimopacity-008)",
        "m3state-layerslightsurface-dimopacity-012":
          "var(--m3state-layerslightsurface-dimopacity-012)",
        "m3state-layerslightsurface-dimopacity-016":
          "var(--m3state-layerslightsurface-dimopacity-016)",
        "m3state-layerslightsurface-tintopacity-008":
          "var(--m3state-layerslightsurface-tintopacity-008)",
        "m3state-layerslightsurface-tintopacity-012":
          "var(--m3state-layerslightsurface-tintopacity-012)",
        "m3state-layerslightsurface-tintopacity-016":
          "var(--m3state-layerslightsurface-tintopacity-016)",
        "m3state-layerslightsurface-variantopacity-008":
          "var(--m3state-layerslightsurface-variantopacity-008)",
        "m3state-layerslightsurface-variantopacity-012":
          "var(--m3state-layerslightsurface-variantopacity-012)",
        "m3state-layerslightsurface-variantopacity-016":
          "var(--m3state-layerslightsurface-variantopacity-016)",
        "m3state-layerslightsurfaceopacity-008":
          "var(--m3state-layerslightsurfaceopacity-008)",
        "m3state-layerslightsurfaceopacity-012":
          "var(--m3state-layerslightsurfaceopacity-012)",
        "m3state-layerslightsurfaceopacity-016":
          "var(--m3state-layerslightsurfaceopacity-016)",
        "m3state-layerslighttertiary-containeropacity-008":
          "var(--m3state-layerslighttertiary-containeropacity-008)",
        "m3state-layerslighttertiary-containeropacity-012":
          "var(--m3state-layerslighttertiary-containeropacity-012)",
        "m3state-layerslighttertiary-containeropacity-016":
          "var(--m3state-layerslighttertiary-containeropacity-016)",
        "m3state-layerslighttertiary-fixed-dimopacity-008":
          "var(--m3state-layerslighttertiary-fixed-dimopacity-008)",
        "m3state-layerslighttertiary-fixed-dimopacity-012":
          "var(--m3state-layerslighttertiary-fixed-dimopacity-012)",
        "m3state-layerslighttertiary-fixed-dimopacity-016":
          "var(--m3state-layerslighttertiary-fixed-dimopacity-016)",
        "m3state-layerslighttertiary-fixedopacity-008":
          "var(--m3state-layerslighttertiary-fixedopacity-008)",
        "m3state-layerslighttertiary-fixedopacity-012":
          "var(--m3state-layerslighttertiary-fixedopacity-012)",
        "m3state-layerslighttertiary-fixedopacity-016":
          "var(--m3state-layerslighttertiary-fixedopacity-016)",
        "m3state-layerslighttertiaryopacity-008":
          "var(--m3state-layerslighttertiaryopacity-008)",
        "m3state-layerslighttertiaryopacity-012":
          "var(--m3state-layerslighttertiaryopacity-012)",
        "m3state-layerslighttertiaryopacity-016":
          "var(--m3state-layerslighttertiaryopacity-016)",
        "m3sysdarkerror-container": "var(--m3sysdarkerror-container)",
        "m3sysdarkinverse-on-surface": "var(--m3sysdarkinverse-on-surface)",
        "m3sysdarkinverse-primary": "var(--m3sysdarkinverse-primary)",
        "m3sysdarkinverse-surface": "var(--m3sysdarkinverse-surface)",
        "m3sysdarkon-background": "var(--m3sysdarkon-background)",
        "m3sysdarkon-error": "var(--m3sysdarkon-error)",
        "m3sysdarkon-error-container": "var(--m3sysdarkon-error-container)",
        "m3sysdarkon-primary": "var(--m3sysdarkon-primary)",
        "m3sysdarkon-primary-container": "var(--m3sysdarkon-primary-container)",
        "m3sysdarkon-primary-fixed": "var(--m3sysdarkon-primary-fixed)",
        "m3sysdarkon-primary-fixed-variant":
          "var(--m3sysdarkon-primary-fixed-variant)",
        "m3sysdarkon-secondary": "var(--m3sysdarkon-secondary)",
        "m3sysdarkon-secondary-container":
          "var(--m3sysdarkon-secondary-container)",
        "m3sysdarkon-secondary-fixed": "var(--m3sysdarkon-secondary-fixed)",
        "m3sysdarkon-secondary-fixed-variant":
          "var(--m3sysdarkon-secondary-fixed-variant)",
        "m3sysdarkon-surface": "var(--m3sysdarkon-surface)",
        "m3sysdarkon-surface-variant": "var(--m3sysdarkon-surface-variant)",
        "m3sysdarkon-tertiary": "var(--m3sysdarkon-tertiary)",
        "m3sysdarkon-tertiary-container":
          "var(--m3sysdarkon-tertiary-container)",
        "m3sysdarkon-tertiary-fixed": "var(--m3sysdarkon-tertiary-fixed)",
        "m3sysdarkon-tertiary-fixed-variant":
          "var(--m3sysdarkon-tertiary-fixed-variant)",
        "m3sysdarkoutline-variant": "var(--m3sysdarkoutline-variant)",
        "m3sysdarkprimary-container": "var(--m3sysdarkprimary-container)",
        "m3sysdarkprimary-fixed": "var(--m3sysdarkprimary-fixed)",
        "m3sysdarkprimary-fixed-dim": "var(--m3sysdarkprimary-fixed-dim)",
        "m3sysdarksecondary-container": "var(--m3sysdarksecondary-container)",
        "m3sysdarksecondary-fixed": "var(--m3sysdarksecondary-fixed)",
        "m3sysdarksecondary-fixed-dim": "var(--m3sysdarksecondary-fixed-dim)",
        "m3sysdarksurface-bright": "var(--m3sysdarksurface-bright)",
        "m3sysdarksurface-container": "var(--m3sysdarksurface-container)",
        "m3sysdarksurface-container-high":
          "var(--m3sysdarksurface-container-high)",
        "m3sysdarksurface-container-highest":
          "var(--m3sysdarksurface-container-highest)",
        "m3sysdarksurface-container-low":
          "var(--m3sysdarksurface-container-low)",
        "m3sysdarksurface-container-lowest":
          "var(--m3sysdarksurface-container-lowest)",
        "m3sysdarksurface-dim": "var(--m3sysdarksurface-dim)",
        "m3sysdarksurface-tint": "var(--m3sysdarksurface-tint)",
        "m3sysdarksurface-variant": "var(--m3sysdarksurface-variant)",
        "m3sysdarktertiary-container": "var(--m3sysdarktertiary-container)",
        "m3sysdarktertiary-fixed": "var(--m3sysdarktertiary-fixed)",
        "m3sysdarktertiary-fixed-dim": "var(--m3sysdarktertiary-fixed-dim)",
        "m3syslighterror-container": "var(--m3syslighterror-container)",
        "m3syslightinverse-on-surface": "var(--m3syslightinverse-on-surface)",
        "m3syslightinverse-primary": "var(--m3syslightinverse-primary)",
        "m3syslightinverse-surface": "var(--m3syslightinverse-surface)",
        "m3syslighton-background": "var(--m3syslighton-background)",
        "m3syslighton-error": "var(--m3syslighton-error)",
        "m3syslighton-error-container": "var(--m3syslighton-error-container)",
        "m3syslighton-primary": "var(--m3syslighton-primary)",
        "m3syslighton-primary-container":
          "var(--m3syslighton-primary-container)",
        "m3syslighton-primary-fixed": "var(--m3syslighton-primary-fixed)",
        "m3syslighton-primary-fixed-variant":
          "var(--m3syslighton-primary-fixed-variant)",
        "m3syslighton-secondary": "var(--m3syslighton-secondary)",
        "m3syslighton-secondary-container":
          "var(--m3syslighton-secondary-container)",
        "m3syslighton-secondary-fixed": "var(--m3syslighton-secondary-fixed)",
        "m3syslighton-secondary-fixed-variant":
          "var(--m3syslighton-secondary-fixed-variant)",
        "m3syslighton-surface": "var(--m3syslighton-surface)",
        "m3syslighton-surface-variant": "var(--m3syslighton-surface-variant)",
        "m3syslighton-tertiary": "var(--m3syslighton-tertiary)",
        "m3syslighton-tertiary-container":
          "var(--m3syslighton-tertiary-container)",
        "m3syslighton-tertiary-fixed": "var(--m3syslighton-tertiary-fixed)",
        "m3syslighton-tertiary-fixed-variant":
          "var(--m3syslighton-tertiary-fixed-variant)",
        "m3syslightoutline-variant": "var(--m3syslightoutline-variant)",
        "m3syslightprimary-container": "var(--m3syslightprimary-container)",
        "m3syslightprimary-fixed": "var(--m3syslightprimary-fixed)",
        "m3syslightprimary-fixed-dim": "var(--m3syslightprimary-fixed-dim)",
        "m3syslightsecondary-container": "var(--m3syslightsecondary-container)",
        "m3syslightsecondary-fixed": "var(--m3syslightsecondary-fixed)",
        "m3syslightsecondary-fixed-dim": "var(--m3syslightsecondary-fixed-dim)",
        "m3syslightsurface-bright": "var(--m3syslightsurface-bright)",
        "m3syslightsurface-container": "var(--m3syslightsurface-container)",
        "m3syslightsurface-container-high":
          "var(--m3syslightsurface-container-high)",
        "m3syslightsurface-container-highest":
          "var(--m3syslightsurface-container-highest)",
        "m3syslightsurface-container-low":
          "var(--m3syslightsurface-container-low)",
        "m3syslightsurface-container-lowest":
          "var(--m3syslightsurface-container-lowest)",
        "m3syslightsurface-dim": "var(--m3syslightsurface-dim)",
        "m3syslightsurface-tint": "var(--m3syslightsurface-tint)",
        "m3syslightsurface-variant": "var(--m3syslightsurface-variant)",
        "m3syslighttertiary-container": "var(--m3syslighttertiary-container)",
        "m3syslighttertiary-fixed": "var(--m3syslighttertiary-fixed)",
        "m3syslighttertiary-fixed-dim": "var(--m3syslighttertiary-fixed-dim)",
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        "m3-body-large": "var(--m3-body-large-font-family)",
        "m3-body-medium": "var(--m3-body-medium-font-family)",
        "m3-body-small": "var(--m3-body-small-font-family)",
        "m3-display-large": "var(--m3-display-large-font-family)",
        "m3-display-medium": "var(--m3-display-medium-font-family)",
        "m3-display-small": "var(--m3-display-small-font-family)",
        "m3-headline-large": "var(--m3-headline-large-font-family)",
        "m3-headline-medium": "var(--m3-headline-medium-font-family)",
        "m3-headline-small": "var(--m3-headline-small-font-family)",
        "m3-label-large": "var(--m3-label-large-font-family)",
        "m3-label-large-prominent":
          "var(--m3-label-large-prominent-font-family)",
        "m3-label-medium": "var(--m3-label-medium-font-family)",
        "m3-label-medium-prominent":
          "var(--m3-label-medium-prominent-font-family)",
        "m3-label-small": "var(--m3-label-small-font-family)",
        "m3-title-large": "var(--m3-title-large-font-family)",
        "m3-title-large-cn": "var(--m3-title-large-cn-font-family)",
        "m3-title-medium": "var(--m3-title-medium-font-family)",
        "m3-title-medium-cn": "var(--m3-title-medium-cn-font-family)",
        "m3-title-small": "var(--m3-title-small-font-family)",
        "m3-title-small-cn": "var(--m3-title-small-cn-font-family)",
        // TODO: it should be here since shadcn docs said so, but broke the fontFamily, find why
        // sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      boxShadow: {
        "m3-elevation-dark-1": "var(--m3-elevation-dark-1)",
        "m3-elevation-dark-2": "var(--m3-elevation-dark-2)",
        "m3-elevation-dark-3": "var(--m3-elevation-dark-3)",
        "m3-elevation-dark-4": "var(--m3-elevation-dark-4)",
        "m3-elevation-dark-5": "var(--m3-elevation-dark-5)",
        "m3-elevation-light-1": "var(--m3-elevation-light-1)",
        "m3-elevation-light-2": "var(--m3-elevation-light-2)",
        "m3-elevation-light-3": "var(--m3-elevation-light-3)",
        "m3-elevation-light-4": "var(--m3-elevation-light-4)",
        "m3-elevation-light-5": "var(--m3-elevation-light-5)",
      },
    },
  },
  plugins: [
    // shadcn
    require("tailwindcss-animate"),
    // boilerplate
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    plugin(({ addVariant }) => {
      addVariant("radix-side-top", '&[data-side="top"]');
      addVariant("radix-side-bottom", '&[data-side="bottom"]');
    }),
  ],
};
