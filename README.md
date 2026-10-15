# Mini Tienda

A small grocery shop built with React and TypeScript, as a practice project to learn React fundamentals.

> 🚧 **Work in progress.** See the [roadmap](#roadmap) for what's done and what's next.

<!-- TODO: add a screenshot, e.g. ![Mini Tienda product list](docs/screenshot.png) -->

## Features

- Product list rendered from local data, with one reusable card per product
- Header with the shop logo and a cart counter
- Footer that stays at the bottom of the page, with the current year calculated automatically

## Tech stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- ESLint and Prettier

No router, state manager or UI library: only React. There's no backend either; the product data lives in [`src/data/products.ts`](src/data/products.ts).

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 20.19+ or 22.12+

### Installation

```bash
git clone https://github.com/jjpg-code/mini-tienda.git
cd mini-tienda
npm install
npm run dev
```

Then open the URL shown in the terminal (usually http://localhost:5173).

## Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the development server             |
| `npm run build`   | Type-check and build for production      |
| `npm run preview` | Preview the production build locally     |
| `npm run lint`    | Run ESLint                               |
| `npm run format`  | Format the code with Prettier            |

## What I learned

- **Components and typed props:** each component describes the props it receives with a TypeScript type.
- **Callback props:** child components don't change the app's state themselves. They call a function that the parent passes down (for example, `onLogoClick`).
- **Rendering lists:** turning an array of data into UI with `.map()`, and using a stable, unique `key` (the product `id`, never the array index).
- **Type inference:** once a prop is typed, TypeScript works out the types inside `.map()` on its own.
- **Semantic HTML and accessibility:** buttons for actions, links for navigation, `<article>` for cards, and an empty `alt` for decorative images.

## Roadmap

- [x] Header and footer
- [x] Product list
- [ ] Product detail view
- [ ] Cart: add products, change quantities and remove lines
- [ ] Cart total and item count, calculated from the cart
- [ ] Bonus: search by name, filter by category, and keep the cart after a page reload
