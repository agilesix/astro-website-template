# Design Tokens System

This project uses a centralized design tokens system for easy modification of brand colors, spacing, typography, and other design values.

## How Tokens Work

The design tokens system has **two parts** that work together:

1. **`src/config/tokens.ts`** - TypeScript definitions
   - Used for TypeScript/JavaScript code
   - Provides type safety and autocomplete
   - Source of truth for programmatic usage

2. **`src/styles/global.css`** - CSS custom properties
   - Used for CSS styling
   - Source of truth for visual styling
   - Automatically available in all CSS files via CSS variables

⚠️ **Important**: These two files should be kept **in sync manually**. When you update a value in `tokens.ts`, you should also update the corresponding CSS custom property in `global.css`.

## Quick Start

To modify design values, you have two options:

### Option 1: Update CSS Custom Properties (Recommended for styling)
Edit the CSS custom properties in `src/styles/global.css` in the `:root` section. This is the quickest way to change visual values.

### Option 2: Update TypeScript Tokens (For code usage)
Edit `src/config/tokens.ts`, then update the corresponding CSS custom property in `global.css` to keep them in sync.

### Example: Changing Brand Colors

```css
:root {
  /* Change primary color from blue to green */
  --color-primary: #10b981;        /* Was: #2563eb */
  --color-primary-hover: #059669; /* Was: #1d4ed8 */
  --color-primary-light: #34d399; /* Was: #3b82f6 */
  --color-primary-dark: #047857;  /* Was: #1e40af */
}
```

### Example: Changing Spacing Scale

```css
:root {
  /* Increase spacing scale */
  --spacing-md: 1.25rem;  /* Was: 1rem (16px) */
  --spacing-lg: 2rem;     /* Was: 1.5rem (24px) */
  --spacing-xl: 2.5rem;   /* Was: 2rem (32px) */
}
```

### Example: Changing Border Radius

```css
:root {
  /* More rounded corners */
  --radius-lg: 0.75rem;  /* Was: 0.5rem (8px) */
  --radius-xl: 1rem;     /* Was: 0.75rem (12px) */
}
```

## Available Tokens

### Colors
- `--color-primary` - Primary brand color
- `--color-primary-hover` - Primary hover state
- `--color-primary-light` - Lighter primary variant
- `--color-primary-dark` - Darker primary variant
- `--color-text-primary` - Main text color
- `--color-text-secondary` - Secondary text color
- `--color-text-tertiary` - Tertiary text color
- `--color-text-muted` - Muted text color
- `--color-bg-default` - Default background
- `--color-bg-muted` - Muted background (cards, callouts)
- `--color-bg-subtle` - Subtle background
- `--color-border-default` - Default border color
- `--color-border-light` - Light border color

### Spacing
- `--spacing-xs` through `--spacing-4xl` - Consistent spacing scale

### Border Radius
- `--radius-sm` through `--radius-2xl` - Corner radius values

### Transitions
- `--transition-fast` - 150ms
- `--transition-normal` - 250ms
- `--transition-slow` - 350ms

### Layout
- `--container-max-width` - Content container max width
- `--section-padding-y` - Vertical section padding
- `--section-padding-x` - Horizontal section padding

## Utility Classes

The following utility classes use the tokens and can be used in components:

### Buttons
- `.button-primary` - Primary button style

### Cards & Callouts
- `.card` - Card component styling
- `.callout` - Callout/info box styling

### Layout
- `.container-content` - Content container with max-width
- `.section-padding` - Section padding

### Typography
- `.text-heading-1` - Main heading
- `.text-heading-2` - Secondary heading
- `.text-heading-3` - Tertiary heading
- `.text-body-large` - Large body text
- `.text-body` - Regular body text
- `.text-body-small` - Small body text

## Using Tokens in Components

### In CSS/Global Styles
```css
.my-component {
  background-color: var(--color-bg-muted);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  color: var(--color-text-primary);
}
```

### In Component Styles (Inline)
```astro
<div style="background-color: var(--color-bg-muted); padding: var(--spacing-lg);">
  Content
</div>
```

### Using Utility Classes
```astro
<div class="card">
  <h2 class="text-heading-3">Title</h2>
  <p class="text-body">Content</p>
</div>
```

## Keeping Tokens in Sync

When updating tokens, follow these steps:

1. **Decide which file to edit first:**
   - For CSS styling: Edit `src/styles/global.css`
   - For TypeScript usage: Edit `src/config/tokens.ts`

2. **Update the corresponding file:**
   - If you edited `tokens.ts`, update the CSS custom property in `global.css`
   - If you edited `global.css`, update the TypeScript value in `tokens.ts`

3. **Check the mapping:**
   - Each CSS custom property has a comment showing the corresponding `tokens.ts` path
   - Example: `--color-primary: #2563eb; /* tokens.colors.primary.DEFAULT */`

### Mapping Reference

| CSS Custom Property | TypeScript Path |
|-------------------|-----------------|
| `--color-primary` | `tokens.colors.primary.DEFAULT` |
| `--color-primary-hover` | `tokens.colors.primary.hover` |
| `--color-text-primary` | `tokens.colors.text.primary` |
| `--spacing-md` | `tokens.spacing.md` |
| `--radius-lg` | `tokens.radius.lg` |
| `--transition-normal` | `tokens.transitions.normal` |

See `src/styles/global.css` for the complete mapping with inline comments.

## Reference

- **`src/config/tokens.ts`** - TypeScript definitions (for code usage)
- **`src/styles/global.css`** - CSS custom properties (for styling)
- **`src/config/generateTokens.ts`** - Helper function to generate CSS from tokens (for future automation)

