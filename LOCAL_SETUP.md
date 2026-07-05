# Running locally

The Replit version uses pnpm workspaces and Replit-specific plugins. To run this with yarn locally, swap in two files first.

## Steps

1. Download the project as a ZIP from Replit and extract it
2. Navigate to the portfolio folder:
   ```bash
   cd artifacts/portfolio
   ```
3. Copy the local-friendly config files over:
   ```bash
   cp local-setup/package.json package.json
   cp local-setup/vite.config.ts vite.config.ts
   ```
4. Install and run:
   ```bash
   yarn install
   yarn dev
   ```
5. Open [http://localhost:5173](http://localhost:5173)

## Building for production

```bash
yarn build
```

Output goes to `dist/`. Deploy the contents of that folder to Vercel, Netlify, or any static host.
