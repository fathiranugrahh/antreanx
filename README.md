# AntreanX

> Lightweight queue management system for front-desk service operations.

[![Next.js](https://img.shields.io/badge/Next.js-Pages_Router-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma)](https://www.prisma.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## About

AntreanX is a queue management system built for front-desk service centers. It was designed around the complaint-intake workflow of PT Telkom Indonesia (IndiHome / IndiBiz Sulbagsel), but it works for any walk-in service desk.

Customers take a queue number through a public form. Admins run the queue from a dashboard: every complaint is tracked from **Menunggu** (waiting) → **Diproses** (in progress) → **Selesai** (done), queue tickets can be printed, and records can be exported to CSV.

## Features

- 🎫 **Auto-generated queue numbers** (e.g. `A001`)
- 📝 **Public complaint form** — category, device type (Modem, AP, STB), and No. Internet
- 🔐 **Admin authentication** with NextAuth (credentials provider)
- 📊 **Admin dashboard**
  - Real-time complaint listing
  - Status transitions: `Menunggu` → `Diproses` → `Selesai`
  - Metrics: total, waiting, in progress, done
  - Pagination and completed-complaints list
- 🖨️ **Printable queue ticket**
- 📁 **Export complaints to CSV**
- 📌 **Confirmation modal** with queue details after submission

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js (Pages Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| ORM / Database | Prisma ORM + SQLite |
| Auth | NextAuth.js |
| Export | FileSaver.js |

## Project Structure

```
antreanx/
├── pages/        # Routes & API endpoints
├── prisma/       # Schema & migrations
├── styles/       # Global styles
└── public/       # Static assets
```

## Getting Started

```bash
# Clone the repository
git clone https://github.com/fathiranugrahh/antreanx.git
cd antreanx

# Install dependencies
npm install

# Generate the Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Start the development server
npm run dev
```

Create a `.env` file with:

```env
NEXTAUTH_SECRET=your-secret
NEXTAUTH_URL=http://localhost:3000
```

## License

MIT — free to use and modify.

---

Built by [Fathir Anugrah](https://github.com/fathiranugrahh) · [fathiranugrah.com](https://fathiranugrah.com)
