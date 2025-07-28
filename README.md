# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {

# Assignment React Project

This project is a simple React app using Material UI and React Query. It demonstrates fetching data from an API, a prominent animated counter, and best practices for state management and UI.

## Features
- Fetches a list of items from a mock API (`https://jsonplaceholder.typicode.com/comments`)
- Button to trigger data fetch and increment a counter
- Counter is visually prominent and can be animated
- Uses React Query for data fetching and caching
- Uses Material UI for layout and styling

## Getting Started

### Prerequisites
- Node.js (v16 or above recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd Assignment
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the App
```sh
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:5173` (or as shown in your terminal).

## Project Structure
- `src/App.tsx` — Main app component
- `src/App.css` — App styles
- `public/` — Static assets

## Best Practices Used
- Component-based structure
- API logic separated from UI
- Material UI for consistent design
- React Query for efficient data fetching
- TypeScript for type safety

## License
MIT
