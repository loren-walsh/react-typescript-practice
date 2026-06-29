# React + TypeScript + Vite Course

This project is built from https://www.udemy.com/course/react-typescript-the-practical-guide/?couponCode=MT260629G3 .

Aimed at practicing building responsive and clean code for React + Typescript apps.


## Project Structure

```
src/
├── pages/          # Top-level route components
│   ├── Root.tsx        # Layout wrapper with navigation
│   ├── Home.tsx        # Landing page
│   ├── Sessions.tsx    # Sessions list page
│   └── Session.tsx     # Individual session detail page
├── components/
│   ├── Navigation/     # Site header and nav links
│   ├── Sessions/       # Sessions-specific components (list, item, booking, upcoming)
│   └── UI/             # Reusable primitives (Button, Input, Modal)
├── store/
│   └── sessions-context.tsx  # React context for shared sessions state
├── assets/         # Images used across pages and sessions
├── dummy-sessions.ts   # Static session data for development
├── App.tsx         # Router setup (React Router Dom v6)
└── main.tsx        # App entry point
```