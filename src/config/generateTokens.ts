/**
 * Generate CSS Custom Properties from tokens.ts
 * This ensures tokens.ts is the single source of truth
 */

import { tokens } from "./tokens";

/**
 * Generates CSS custom properties string from tokens
 * Can be used in build scripts or imported where needed
 */
export function generateCSSTokens(): string {
  const cssVars: string[] = [];

  // Brand Colors
  cssVars.push(`  --color-primary: ${tokens.colors.primary.DEFAULT};`);
  cssVars.push(`  --color-primary-hover: ${tokens.colors.primary.hover};`);
  cssVars.push(`  --color-primary-light: ${tokens.colors.primary.light};`);
  cssVars.push(`  --color-primary-dark: ${tokens.colors.primary.dark};`);

  // Text Colors
  cssVars.push(`  --color-text-primary: ${tokens.colors.text.primary};`);
  cssVars.push(`  --color-text-secondary: ${tokens.colors.text.secondary};`);
  cssVars.push(`  --color-text-tertiary: ${tokens.colors.text.tertiary};`);
  cssVars.push(`  --color-text-muted: ${tokens.colors.text.muted};`);

  // Background Colors
  cssVars.push(`  --color-bg-default: ${tokens.colors.background.DEFAULT};`);
  cssVars.push(`  --color-bg-muted: ${tokens.colors.background.muted};`);
  cssVars.push(`  --color-bg-subtle: ${tokens.colors.background.subtle};`);

  // Border Colors
  cssVars.push(`  --color-border-default: ${tokens.colors.border.DEFAULT};`);
  cssVars.push(`  --color-border-light: ${tokens.colors.border.light};`);

  // Spacing
  Object.entries(tokens.spacing).forEach(([key, value]) => {
    const cssKey = key === "2xl" ? "2xl" : key === "3xl" ? "3xl" : key === "4xl" ? "4xl" : key;
    cssVars.push(`  --spacing-${cssKey}: ${value};`);
  });

  // Border Radius
  Object.entries(tokens.radius).forEach(([key, value]) => {
    if (key !== "none" && key !== "full") {
      const cssKey = key === "2xl" ? "2xl" : key;
      cssVars.push(`  --radius-${cssKey}: ${value};`);
    }
  });

  // Transitions
  Object.entries(tokens.transitions).forEach(([key, value]) => {
    cssVars.push(`  --transition-${key}: ${value};`);
  });

  // Layout
  cssVars.push(`  --container-max-width: ${tokens.layout.container.maxWidth.content};`);
  cssVars.push(`  --section-padding-y: ${tokens.layout.section.padding.vertical};`);
  cssVars.push(`  --section-padding-x: ${tokens.layout.section.padding.horizontal};`);

  return `:root {\n${cssVars.join("\n")}\n}`;
}

/**
 * Get a specific token value by path
 * Example: getToken('colors.primary.DEFAULT')
 */
export function getToken(path: string): string {
  const parts = path.split(".");
  let value: any = tokens;

  for (const part of parts) {
    value = value[part];
    if (value === undefined) {
      throw new Error(`Token path "${path}" not found`);
    }
  }

  return String(value);
}

