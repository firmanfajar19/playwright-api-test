import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  testDir: './tests',
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  reporter: 'line',
  
  use: {
    baseURL: 'https://dummyjson.com/',
    trace: 'on-first-retry',
    
    // Optional: Set extra HTTP headers if needed
    // extraHTTPHeaders: {
    //   'Authorization': `Bearer ${process.env.AUTH_TOKEN}`,
    // },
  },

  globalSetup: require.resolve('./global.setup.ts'),
});