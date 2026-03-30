# Customer Support Hub (Mixed Writing Example)

This example demonstrates a business-oriented mixed-writing project for VuReact compiler:

- Stack: Vue + Vue Router + Ant Design (React) + Zustand + Sass + dayjs + fuse.js
- Focus: controlled mixed writing in a realistic support ticket workflow
- Pages: login, dashboard, ticket list, ticket detail, knowledge base, SLA board, settings

English | [简体中文](./README.md)

## Important Notes

Please manually import `styles/app.css` in `.vureact/react-app/src/main.tsx` to complete the page styles!!!

```js
// main.tsx
import 'styles/app.css';
```

## Getting Started

Note: In the CodeSandbox online environment, the following steps are usually not required. If you find that the preview page does not start properly, simply navigate to the `.vureact/react-app/` directory and run `npm run dev`.

### Step 1: Run VuReact Build

- Install Dependencies

```bash
npm install
```

- Execute Compilation

```bash
# Method 1: VuReact full compilation
npm run vr:build

# Method 2: VuReact incremental compilation (watch mode)
npm run vr:watch
```

### Step 2: Run React App

- Navigate to the workspace build output directory

```bash
cd .vureact/react-app/
```

- Install Dependencies

```bash
npm install
```

- Start the Vite dev server and visit, for example, <http://localhost:5173>

```bash
npm run dev
```

## Official Tutorial

<https://www.vureact.top/en/guide/customer-support-hub.html>
