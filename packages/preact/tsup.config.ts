import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/signals/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
});
