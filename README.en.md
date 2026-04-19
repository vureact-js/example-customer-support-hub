# Customer Support Hub (Mixed Writing Example)

This example demonstrates a business-oriented mixed-writing project for VuReact compiler:

- Stack: Vue + Vue Router + Ant Design (React) + Zustand + Sass + dayjs + fuse.js
- Focus: controlled mixed writing in a realistic support ticket workflow
- Pages: login, overview, ticket list, customer management, agent management, knowledge base, SLA dashboard, settings

> The final compilation output is a pure React application, without any runtime encapsulation layer, such as embedding a Vue runtime container within React.

English | [简体中文](./README.md)

## Getting Started

### Notes

- If the `vureact(watch)` monitoring task is not running, please execute `pnpm vr:watch` in the project root directory. Otherwise, modifications made on the Vue side will not be synchronized to the React application.

- In the CodeSandbox online environment, it is usually not necessary to manually perform the following steps. If the preview page fails to start normally, please navigate to the `.vureact/react-app/` directory and run `npm run dev`.

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
