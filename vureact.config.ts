import { defineConfig } from '@vureact/compiler-core';

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
  format: {
    enabled: false,
    formatter: 'prettier',
  },
});
