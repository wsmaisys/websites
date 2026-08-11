/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#1B3863",
        obsidian: "#1B3863",
        alabaster: "#FFFFFF",
        background: "#F8F9FA",
        surface: "#F8F9FA",
        "surface-container": "#EDEEEF",
        "on-background": "#191C1D",
        "on-surface": "#191C1D",
        "on-surface-variant": "#45474B",
        "on-primary-fixed-variant": "#45474B",
        "slate-subtle": "#E5E7EB",
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        "label-sm": ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        "body-md": ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        "body-lg": ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        "headline-md": ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        "headline-lg": ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        "display-lg": ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        "label-sm": ["12px", { lineHeight: "1.4", fontWeight: "500" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-md": ["28px", { lineHeight: "1.3", fontWeight: "500" }],
        "headline-lg": ["40px", { lineHeight: "1.2", fontWeight: "500" }],
        "display-lg": ["56px", { lineHeight: "1.1", fontWeight: "600" }],
      },
      spacing: {
        "margin-mobile": "20px",
        "margin-desktop": "56px",
        gutter: "24px",
        "section-gap": "56px",
        base: "8px",
      },
      maxWidth: {
        "container-max": "1280px",
      },
    },
  },
  plugins: [],
};
