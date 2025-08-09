# Roamly — Travel & Tourism Frontend (Next.js + Tailwind CSS)

Roamly is a modern, responsive frontend for discovering destinations and tour packages in Ethiopia. It features a refined glassmorphism UI, interactive cards, and a search experience that’s optimized for both desktop and mobile.

---

### Highlights

- Black-glass navbar with improved contrast and visibility
- Logo in a glass capsule for a premium feel
- Hero section with background image and modern typography
- Redesigned destination cards with a three‑row description area (date pill, bold title, location/price actions)
- “Our Tourist Destination” grid with tilt interaction and polished hover effects
- View More and Discover actions with clear visibility on light backgrounds

---

## Tech Stack

- Next.js 15 (App Router)
- React 18 + TypeScript
- Tailwind CSS 3

---

## Getting Started

1) Install dependencies

```bash
npm install
```

2) Run the dev server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

3) Production build

```bash
npm run build
npm start
```

---

## Project Structure

```bash
Travel-Camping--NextJS-Frontend/
├── app/
│   ├── layout.tsx            # Root layout, navbar + footer
│   ├── page.tsx              # Home page
│   └── globals.css
├── components/
│   ├── Navbar.tsx            # Black glass navbar + logo capsule
│   ├── Hero.tsx              # Hero section + search container (UI)
│   ├── Features.tsx          # “Our Tourist Destination” grid
│   ├── DestinationCard.tsx   # Interactive card
│   ├── DestinationCard.css   # Card styles (glass, rows, actions)
│   ├── GlassSurface.tsx/.css # Reusable glassmorphism surface
│   ├── Camp.tsx, Guide.tsx, GetApp.tsx, Footer.tsx, Blog.tsx, ...
├── constants/index.ts        # Data for nav, tours, destinations, etc.
├── public/                   # Images and icons
├── tailwind.config.ts
└── package.json
```

---

## Key UI Details

- Destination card description section is vertically stacked:
  - Row 1: compact left‑aligned date pill (transparent, white border)
  - Row 2: centered, bold uppercase title
  - Row 3: two equal buttons (Location and Price) with transparent background and white borders

- Navbar and menu surfaces use a black‑glass variant for readability over bright content.

---

## Customization

- Colors and shadows are defined via Tailwind classes and `components/GlassSurface.css`.
- Tour card content comes from `constants/index.ts` (`TOUR_PACKAGES`).
- Images live in `public/`. Replace with your own assets as needed.

---

## Roadmap

- Hook up the search bar to real filtering/navigation
- Add dedicated listing/detail pages
- Expand date/budget/guests selectors with backend integration

---

## License

This repository is provided as an application template and example UI. You are free to modify and use components of it , if you use the whole website dont forget to credit or mention me.

