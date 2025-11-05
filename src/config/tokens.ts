/**
 * Design Tokens
 * Centralized design values for easy modification
 */

export const tokens = {
  // Brand Colors
  colors: {
    primary: {
      DEFAULT: "#2563eb", // blue-600
      hover: "#1d4ed8", // blue-700
      light: "#3b82f6", // blue-500
      dark: "#1e40af", // blue-800
    },
    text: {
      primary: "#111827", // gray-900
      secondary: "#4b5563", // gray-600
      tertiary: "#6b7280", // gray-500
      muted: "#9ca3af", // gray-400
    },
    background: {
      DEFAULT: "#ffffff",
      muted: "#f9fafb", // gray-50
      subtle: "#f3f4f6", // gray-100
    },
    border: {
      DEFAULT: "#e5e7eb", // gray-200
      light: "#d1d5db", // gray-300
    },
  },

  // Typography
  typography: {
    fontFamily: {
      sans: "ui-sans-serif, system-ui, sans-serif",
      mono: "ui-monospace, monospace",
    },
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem", // 48px
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    lineHeight: {
      tight: "1.25",
      normal: "1.5",
      relaxed: "1.75",
    },
  },

  // Spacing
  spacing: {
    xs: "0.25rem", // 4px
    sm: "0.5rem", // 8px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
    "2xl": "3rem", // 48px
    "3xl": "4rem", // 64px
    "4xl": "5rem", // 80px
  },

  // Border Radius
  radius: {
    none: "0",
    sm: "0.125rem", // 2px
    md: "0.375rem", // 6px
    lg: "0.5rem", // 8px
    xl: "0.75rem", // 12px
    "2xl": "1rem", // 16px
    full: "9999px",
  },

  // Shadows
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
  },

  // Transitions
  transitions: {
    fast: "150ms",
    normal: "250ms",
    slow: "350ms",
  },

  // Layout
  layout: {
    container: {
      maxWidth: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        content: "896px", // max-w-4xl
      },
    },
    section: {
      padding: {
        vertical: "5rem", // py-20
        horizontal: "1rem", // px-4
      },
    },
  },
} as const;
