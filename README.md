# 客户支持协同台（混写示例）

该示例用于演示 VuReact 在真实业务场景下的“可控混写”能力：

- 技术栈：Vue + Vue Router + Ant Design（React）+ Zustand（React） + Sass + dayjs + fusejs
- 场景：客服工单协同流程（列表、详情、知识库、SLA）
- 页面：登录、总览、工单列表、客户管理、坐席管理、知识库、SLA 看板、设置

简体中文 | [English](./README.en.md)

## 重要事项

请手动在 `.vureact/react-app/src/main.tsx` 中导入 `styles/app.css`，补齐页面样式！！！。

```js
// import './index.css' （移除 Vite 初始化样式）
import 'styles/app.css';
```

## 开始使用

注：在 CodeSandbox 在线环境中，通常无需执行以下步骤。若发现预览页面未正常启动，只需进入 `.vureact/react-app/` 目录并运行 `npm run dev` 即可。

### Step 1: 运行 VuReact 构建

- 安装依赖

```bash
npm install
```

- 执行编译

```bash
# 方式一：vureact 全量编译
npm run vr:build

# 方式二：vureact 增量编译（监听模式）
npm run vr:watch
```

### Step 2: 运行 React App

- 进入工作区构建产物目录

```bash
cd .vureact/react-app/
```

- 安装依赖

```bash
npm install
```

- 启动 Vite dev 服务，并访问如 <http://localhost:5173>

```bash
npm run dev
```

## 官方教程

<https://www.vureact.top/guide/customer-support-hub.html>
