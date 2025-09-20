import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'test',  // <--- aquí le dices que use 'test'
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['list']
  ],
});