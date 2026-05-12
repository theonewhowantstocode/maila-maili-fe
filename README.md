# maila-maili-fe — Frontend

Day 2 scaffold · Next.js 15 · React 19 · TypeScript · Tailwind CSS · Vercel

---

## Quick start

```bash
# Install dependencies
npm install

# Copy env file and set your BE URL
cp .env.example .env.local

# Start dev server (BE must be running on port 8080)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Environment variables

| Variable | Description | Default |
|---|---|---|
| `NEXT_PUBLIC_API_BASE_URL` | Base URL of the maila-maili BE | `http://localhost:8080` |

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page — server component, fetches status
│   ├── loading.tsx      # Loading state
│   ├── error.tsx        # Error boundary
│   └── globals.css      # Tailwind import
├── components/
│   └── StatusCard.tsx   # Status display component
├── lib/
│   └── api.ts           # BE API client
└── types/
    └── status.ts        # StatusResponse type
```

## Docker

```bash
docker build --build-arg NEXT_PUBLIC_API_BASE_URL=http://localhost:8080 -t maila-maili-fe .
docker run -p 3000:3000 maila-maili-fe
```
