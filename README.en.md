# Customer Support Hub (Mixed Writing)

This is a realistic multi-channel customer support sample used to stress-test VuReact in a business-style admin application.

English | [简体中文](./README.md)

## Stack

- Vue 3
- Vue Router 4
- Ant Design React 6
- Zustand
- Sass
- dayjs
- fuse.js

## Business Scope

The sample now covers the main workflow of a mid-sized support collaboration system:

- Login and admin shell
- Dashboard
- Conversation Center
- Tickets List
- Ticket Detail
- Customers
- Agents
- Knowledge Base
- SLA Board
- Settings

## Conversion Coverage

This example intentionally pushes compiler-sensitive Vue patterns inside real pages instead of isolated demos:

- layered conditionals: `v-if / v-else-if / v-else / v-show`
- nested lists with multiple `v-for`
- named slots and scoped slots
- dynamic components via `:is`
- `defineProps / defineEmits / defineExpose`
- `provide / inject`
- `watch / watchEffect / computed`
- multi-`v-model` event mapping
- template literals plus object / array literal props

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

## Feedback & Community

- Problems? See the [FAQ](https://vureact.top/en/guide/faq.html) or open an [Issue](https://github.com/vureact-js/core/issues).
- Questions about router adaptation? See the [router adaptation guide](https://vureact.top/en/guide/router-adaptation.html).
- Page styles look wrong? See the [style troubleshooting solution](https://vureact.top/en/guide/faq.html#q35-how-to-fix-missing-or-broken-page-styles).
- Share your experience on [Discussions](https://github.com/vureact-js/core/discussions).
- Want to support the project? [Click a ⭐](https://github.com/vureact-js/core/stargazers) helps more people discover it.
