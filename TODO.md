
# TODO List

## Completed Tasks ✅

- [x] **Fix White Flash / Glitch on Load**
    - [x] Move `.loading-screen` to the top of `<body>` in `index.html`.
    - [x] Update `script.js` to avoid showing the white `loading-spinner` during the initial dark `loading-screen`.
    - [x] Ensure `body` background handles the transition smoothly in `style.css` (Updated loading screen background to solid `#1a1a2e`).
- [x] **Luxury & Modern Design Upgrades**
    - [x] Update `index.html`: Fix Meta tag typo (`<meta charset="UTF-8">`), fix Hero section HTML structure, update Scroll text.
    - [x] Update `style.css`: Add `scroll-behavior: smooth`, add golden glow effects to product cards.
    - [x] **Revert Fonts**: User preferred the original Montserrat/Poppins fonts over Playfair Display. Reverted changes.
    - [x] **Logo Adjustment**: Set Bariz logo to white during restart/loading screen (`brightness(0) invert(1)`).
- [x] **Inspirasi Gaya Section Update**
    - [x] Update `index.html`: Changed section title to "Inspirasi Gaya" and subtitle. Replaced placeholders with actual images (`DSCF6974 copy.jpg`, `15.jpg`, `3.jpg`).
    - [x] Update `style.css`: Enhanced `.lifestyle-item` and `.lifestyle-overlay` for better hover effects and image styling.

- [x] **Creative Background Update**
    - [x] Update `style.css`:
        - [x] Create `bg-soft-cream` and `bg-gradient-mesh` variables for a subtle, premium look.
        - [x] Apply mesh gradient to `body` with `fixed` attachment for parallax effect.
        - [x] Remove solid/flat backgrounds from `products`, `lifestyle`, and `faq` sections to allow the mesh to flow through.
        - [x] Add subtle SVG pattern overlay to `products` section.
- [x] **Size Consistency Fixes**
    - [x] **Cart Item Images**: Reduced from 180px x 180px to 120px x 120px to match Bariz logo size.
    - [x] **Product Images**: Reduced from 450px to 280px height for better consistency across the site.
    - [x] **Product Modal Images**: Reduced from 400px to 250px height for better proportion.

- [x] **Verify**
    - [x] Check if the site loads smoothly without white flashes.
    - [x] Confirm background has a creative, non-flat look.
    - [x] Verify content readability against the new background.
    - [x] Confirm image sizes are now consistent across the site.

