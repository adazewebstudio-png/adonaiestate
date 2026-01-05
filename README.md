# Adonai Estate Limited Website

This is an ultra-modern website built for Adonai Estate Limited using React, TypeScript, Vite, TailwindCSS (Concept via vanilla CSS/Utilities), and Framer Motion.

## Project Structure

- `src/pages`: Contains the main pages (Home, OurEstates, Projects, Insight, AboutUs, Contact)
- `src/components`: Reusable components (Navbar, Footer, Layout)
- `public`: Static assets (Images, Logos)

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Managing Images

You can replace the placeholder images in the `public` folder with your own high-quality images.

- **Logo**: Replace `logo.jpg`
- **Hero Image (Home)**: Replace `hero_home.png`
- **Estate Images**: Replace `estate_airport_golf.png`, `estate_uhas.png`, `estate_safari.png`, `estate_leaders.png`

For the **Projects** and **Gallery** (Insight page) sections, you will need to add your images to the `public` folder and update the `src/pages/Projects.tsx` and `src/pages/Insight.tsx` files to reference them (e.g., `<img src="/my-new-project.jpg" ... />`).

## Design System

The site uses a central CSS variable system in `src/index.css` for easy theming.
- Primary Color (Burgundy): `--color-primary`
- Secondary Color (Gold): `--color-secondary`
- Background: `--color-bg` (Ultra Dark)

## Deployment

This project is ready to be deployed to Vercel, Netlify, or any static hosting service.
