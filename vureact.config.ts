import { defineConfig } from '@vureact/compiler-core';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export default defineConfig({
  exclude: ['src/main.ts'],
  router: {
    configFile: 'src/router/index.ts',
  },
  output: {
    /*
      受限于 CodeSandbox 的 Node 版本，仅支持 Vite 6.x
      若本地运行则建议改为 bootstrapVite: true
    */
    bootstrapVite: {
      vite: '@6'
    },
  },
  onSuccess: async () => {
    /*
      对 main.tsx 注入缺失的 styles/app.css 导入
     */
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const entryFile = path.resolve(__dirname, './.vureact/react-app/src/main.tsx');

    const data = fs.readFileSync(entryFile, 'utf-8');
    const newData = data.replace('index.css', 'styles/app.css');

    fs.writeFileSync(entryFile, newData, 'utf-8')
  }
});
