# Vincent Tran — Personal Portfolio

A clean, modern portfolio website built with React, TypeScript, Vite, and Firebase support.

## Features

- **About** — Hero section with tech stack (Firebase, TypeScript, React, Node.js 24) and social links
- **Experience** — Timeline of roles and experience
- **Projects** — Infinite scroll project showcase
- **Dark mode** — Toggle between clean white and dark themes
- **Cool graphics** — Animated hero background and loaders

## Tech Stack

- React 18
- TypeScript
- Vite
- React Router
- Firebase (optional — add config to enable)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Testing

- **Unit / component (Jest + React Testing Library):**
  ```bash
  npm run test          # run once
  npm run test:watch    # watch mode
  npm run test:coverage # with coverage
  ```
- **E2E (Cypress):** Start the dev server, then:
  ```bash
  npm run cypress:open  # interactive
  npm run cypress:run   # headless
  npm run e2e           # start dev server, run Cypress, then exit
  ```

## Customization

### Social Links & Resume

Update `src/components/SocialLinks.tsx` with your URLs.

### Experience

Edit `src/pages/Experience.tsx` — replace the `EXPERIENCES` array with your real roles.

### Projects

Edit `src/data/projects.ts` — add, remove, or modify projects. Each has `title`, `description`, `tech`, `link`, and optional `github`.

### Firebase (Optional)

Create `.env` in the project root:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
```

Firebase Analytics will activate automatically when configured.

## Links

- [LinkedIn](https://www.linkedin.com/in/vincenttran-swe)
- [GitHub](https://github.com/Chimp56)
- [Devpost](https://devpost.com/Chimp56)
- [Resume](https://drive.google.com/file/d/17lAugLzhC2WpAb3VyXo4mgcC4rGFIw-u/view)
