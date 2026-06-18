# burnless.dev

The official website for [Burnless](https://github.com/Custos-com/Burnless) — SRE automation before alerts fire.

## Structure

```
burnless.dev/           → Landing page
burnless.dev/docs       → Documentation
burnless.dev/blog       → Blog
burnless.dev/changelog  → Release notes
burnless.dev/admin      → Admin panel (private)
```

## Tech stack

- **Next.js 14** — React framework
- **Tailwind CSS** — Styling
- **Vercel** — Hosting
- **Clerk** — Admin authentication
- **Vercel Postgres** — Waitlist + blog storage

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push to GitHub
2. Import repo in Vercel
3. Add environment variables from `.env.example`
4. Deploy
