
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://app.cloudqa.io/home/AutomationPracticeForm',
    headless: false, 
    screenshot: 'on',
    video: 'retain-on-failure',
    headless: false, 
    slowMo: 800,
  },
});
