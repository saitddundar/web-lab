# CSS Architecture & Design Decisions - LAB-3

This document outlines the professional CSS decisions made during the implementation of the Responsive Layout for **Lab-3: Modern CSS**.

## 1. Design System (Tokens)
- **File:** `src/tokens.css`
- **Decision:** CENTRALIZED VARIABLES. All colors, spacing, and font sizes are defined as CSS variables in the `:root`. 
- **Benefit:** This ensures consistency across the entire application and allows for easy global updates (e.g., changing the primary color in one place).

## 2. Fluid Typography
- **Implementation:** Used the `clamp()` function.
- **Example:** `var(--fs-xl): clamp(2.25rem, 2rem + 1.5vw, 4rem);`
- **Decision:** Instead of using fixed values or numerous media queries, `clamp()` allows typography to scale smoothly based on the viewport width between a minimum and maximum size.

## 3. Layout: Flexbox vs. CSS Grid
- **Flexbox usage:**
    - **Header Navigation:** Used Flexbox for one-dimensional alignment (horizontal/vertical) to handle item spacing and centering.
    - **Skills Section:** Used `flex-wrap: wrap` to allow skill badges to flow naturally on smaller screens.
- **CSS Grid usage:**
    - **Project Cards:** Used `repeat(auto-fit, minmax(280px, 1fr))`. 
    - **Decision:** Grid is superior for two-dimensional layouts. `auto-fit` automatically handles the responsiveness by adding or removing columns without needing manual media query adjustments.

## 4. Mobile-First Approach & Breakpoints
- **Strategy:** All CSS is written for the smallest screens initially. Enhancements are added via `min-width` media queries.
- **Breakpoints:**
    - **640px (Tablet):** Used to switch the header from a column (centered) layout to a horizontal (space-between) layout and to split the form fields into two columns.
    - **1024px (Desktop):** Used for max-width container control and larger spacing.
- **Decision:** Mobile-first ensures better performance on mobile devices and results in cleaner, more manageable code by only adding complexity as the screen gets larger.

## 5. Accessibility (A11y)
- Maintained a minimum contrast ratio.
- Added a `skip-link` for keyboard users.
- Visible focus states on interactive elements using `var(--color-primary)`.
