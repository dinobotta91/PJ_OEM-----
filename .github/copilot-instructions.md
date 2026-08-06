# Paninkret Japan OEM Website – Copilot Instructions

## Project Overview

This project is the English OEM website for Paninkret Japan Co., Ltd.

The purpose of the website is to introduce Japanese OEM services for cosmetics, health supplements, functional beverages, and related products to international clients and generate business inquiries.

## Technology

- Static website
- HTML
- CSS
- Vanilla JavaScript
- No frameworks
- No React
- No Vue
- No Tailwind CSS
- No Bootstrap
- Do not add external libraries unless explicitly requested

## Project Structure

Main files include:

- `index.html`
- `css/styles.css`
- `js/`
- `public/images/`

Preserve the existing file and folder structure.

Do not rename, move, or delete files unless explicitly requested.

## General Editing Rules

- Make only the requested changes.
- Do not modify unrelated sections or files.
- Inspect only the files necessary for the task.
- Preserve the existing HTML structure whenever possible.
- Reuse existing classes and CSS variables whenever possible.
- Do not rewrite large sections when a small CSS or HTML change is sufficient.
- Do not introduce unnecessary JavaScript.
- Prefer CSS solutions for visual changes.
- Do not create duplicate CSS rules when an existing rule can be updated.
- Do not change text content unless explicitly requested.
- Do not change image paths unless explicitly requested.
- Keep all existing responsive behavior unless the task specifically requires changing it.

## Design Direction

The visual style should be:

- Modern
- Clean
- Minimal
- Professional
- Premium
- International
- Suitable for a Japanese cosmetics and health-product OEM company

Avoid:

- Outdated corporate website styling
- Heavy decorative elements
- Traditional Japanese motifs
- Excessive gradients
- Excessive shadows
- Overly rounded components
- Bright or playful colors
- Cluttered layouts

## Brand Colors

Use the existing site colors and CSS variables.

Main visual direction:

- White
- Very light aqua blue
- Clear blue accents close to the Paninkret Japan logo color
- Dark navy or charcoal text where appropriate

Do not introduce new colors unless necessary.

## Layout

- Maintain generous whitespace.
- Keep sections visually balanced.
- Ensure headings, text, images, and buttons align consistently.
- Preserve the current content order unless explicitly requested.
- Avoid unnecessary changes to section height, width, or spacing.
- Check both desktop and mobile layouts after changes.

## Responsive Design

- The website must work on desktop, tablet, and mobile.
- Do not fix desktop styling in a way that breaks mobile styling.
- Use existing breakpoints whenever possible.
- Add new media queries only when necessary.
- For hover effects, include a suitable non-hover state for touch devices.
- Avoid hover-only interactions that are required to understand or use the site.

## Buttons and Links

- Reuse the existing button classes.
- Keep button sizes, typography, border radius, and spacing consistent.
- Do not create a new button class when an existing class can be extended with a specific selector.
- Hover and focus states should be clear but subtle.
- Preserve keyboard accessibility and visible focus states.
- Do not remove link destinations or button functionality.

## Images

- Use images from `public/images/`.
- Preserve image aspect ratios unless cropping is intentionally requested.
- Use `object-fit` appropriately.
- Avoid stretching images.
- Do not replace an image unless explicitly requested.
- Keep image file names and paths unchanged unless explicitly requested.

## HTML

- Use semantic HTML.
- Preserve accessibility attributes such as `aria-label`, `aria-expanded`, and `aria-controls`.
- Keep heading levels logical.
- Do not remove alt text.
- Do not add unnecessary wrapper elements.
- Keep class names in English and consistent with the existing naming style.

## CSS

- Use the existing stylesheet structure and variables.
- Keep selectors as specific as necessary, but not excessively specific.
- Avoid `!important` unless there is no reasonable alternative.
- Avoid inline styles unless already required by the existing implementation.
- Group new rules near the related existing section.
- Do not duplicate an existing media query unnecessarily.
- Do not alter global styles when a section-specific selector is sufficient.

## JavaScript

- Use Vanilla JavaScript only.
- Do not add JavaScript for effects that can be handled with CSS.
- Preserve existing menu and navigation functionality.
- Avoid global variables.
- Keep code simple and readable.
- Do not add packages, build tools, or dependencies.

## Accessibility

- Maintain sufficient text contrast.
- Preserve keyboard navigation.
- Keep visible focus states.
- Do not rely only on color to communicate meaning.
- Interactive elements must remain usable on touch devices.
- Do not remove existing accessibility attributes.

## Performance

- Avoid unnecessary scripts.
- Avoid loading additional fonts or libraries unless explicitly requested.
- Do not add large assets unnecessarily.
- Preserve existing image optimization.
- Keep the website suitable for static hosting.

## Task Execution

For each request:

1. Identify the smallest necessary change.
2. Inspect only the relevant files.
3. Make the requested change.
4. Check that unrelated sections remain unchanged.
5. Check desktop and mobile behavior.
6. Briefly summarize which files and selectors were changed.

Do not perform broad refactoring, redesign, cleanup, or optimization unless explicitly requested.

## Response Style

After completing a task:

- Keep the explanation brief.
- State which files were changed.
- State what was changed.
- Mention any important responsive or accessibility consideration.
- Do not provide a long tutorial unless requested.