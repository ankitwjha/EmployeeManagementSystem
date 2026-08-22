# 📊 EMS — Employee Management System

A high-performance, role-based task management single-page application built with React 19 and Vite 7. EMS streamlines task delegation and progress tracking between administrators and employees — no backend required, running entirely on client-side persistence.

> Built while learning React.js, just for fun 

**Live Demo:** https://ems-seven-flame.vercel.app/

**Repo:** https://github.com/ankitwjha/ems

---

## Features

- 🔐 Role-based dashboards — separate views and permissions for Admin vs. Employee
- ✅ Task lifecycle tracking — New, Accepted, Completed, Failed
- 🖱️ One-click demo login — pre-configured Admin/Employee credential cards for instant access
- 📝 Dynamic self-registration — new users can register client-side, instantly usable
- 💾 Zero-backend persistence — all data survives page reloads and browser sessions via localStorage
- 📱 Fully responsive task layout — Tailwind CSS grid/flex wrapping prevents card clipping on any screen size
- ⚡ Zero-latency state sync — instant UI updates with no network round-trip

---

## Tech Stack

| Layer | Technology |
|---|---|
| Core Framework | React 19.1.1 |
| Build Tool | Vite 7.1.7 |
| Styling | Tailwind CSS v4.1.14 |
| State Management | React Context API (AuthContext, TaskContext) |
| Persistence | Browser localStorage (no backend/database) |
| Linting | ESLint 9.36.0 + eslint-plugin-react-hooks |
| Fonts | Inter (Google Fonts) |
| Hosting | Vercel |

---

## How Data Persistence Works

Since EMS runs entirely client-side with no server backend, all state is persisted through structured `localStorage` serialization:

- **Auth State** — active user role (Admin/Employee) and session tokens are saved locally on login
- **Task Catalog** — all tasks (New, Accepted, Completed, Failed) are stored as structured JSON under dedicated storage keys
- **Auto-Seeded Data** — on first boot, if no data exists yet, default Admin and Employee datasets are automatically seeded into localStorage
- **Self-Registration** — new users registering client-side are immediately serialized into storage, ready for login without any backend call

---

## Try It Instantly

The landing page includes one-click demo credential cards — no need to register:

| Role | Email | Password |
|---|---|---|
| Admin | `admin@me.com` | `123` |
| Employee | `employee@me.com` | `123` |

Clicking a card auto-fills the login form for instant reviewer access.

---

## Key Engineering Highlights

**1. Zero-Backend Role-Based Architecture**
Admin and Employee roles are fully differentiated at the UI level — Admins get task creation/assignment controls, Employees see categorized task boards — all driven by client-side auth state, no server-side session needed.

**2. Pre-Populated Local Database Initialization**
On first load, the app checks for existing localStorage keys. If missing, it automatically seeds default Admin/Employee accounts and sample tasks — so the app is immediately demoable without manual setup.

**3. Responsive Wrapping Task Layout**
Task cards use Tailwind's `flex-wrap` and `grid-cols-3` to reflow cleanly across screen sizes, preventing clipping or overflow on smaller viewports.

**4. SPA-Safe Vercel Deployment**
A zero-config `vercel.json` rewrite rule ensures client-side routes don't return 404s on direct page loads or refreshes — a common pitfall for single-page apps on static hosting.

---

## Getting Started

### Prerequisites
- Node.js 18+

### Installation

```bash
git clone https://github.com/ankitwjha/ems.git
cd ems
npm install
```

### Run locally

```bash
npm run dev
```

App runs at `http://localhost:5173` (default Vite port).

### Build for production

```bash
npm run build
```

---

## Project Structure

```
ems/
├── public/
│   └── vite.svg              # Favicon
├── src/
│   ├── assets/                 # Icons, vectors, UI images
│   ├── components/
│   │   ├── Auth/                 # Login, Register, Demo credential cards
│   │   ├── Dashboard/            # AdminDashboard & EmployeeDashboard
│   │   ├── TaskList/             # Task cards (New, Accepted, Completed, Failed)
│   │   └── Header/                # Header bar, greeting, logout
│   ├── context/                 # AuthContext & TaskContext (global state + localStorage sync)
│   ├── utils/                    # LocalStorage seed data initialization
│   ├── App.jsx                   # Root shell & role-based routing
│   └── main.jsx                  # React 19 entry point
├── eslint.config.js             # ESLint v9 config (ECMA 2020 + JSX rules)
├── vercel.json                  # SPA routing rewrites for Vercel
└── vite.config.js               # Vite config + Tailwind plugin
```

---

## Deployment

Deployed on [Vercel](https://vercel.com) as a static SPA build. To deploy your own instance, import the repo into Vercel — no environment variables are required since the app has no backend.

---

## License

This project is open source and available under the [MIT License](./LICENSE).

---

## Contact

**Ankit Kumar**
📧 ajha76912@gmail.com
🔗 [GitHub](https://github.com/ankitwjha) · [LinkedIn](https://www.linkedin.com/in/ankit-jha-55b07737b)
