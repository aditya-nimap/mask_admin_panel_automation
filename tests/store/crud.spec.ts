import { test, expect } from '@playwright/test';

test.describe('Store CRUD Operations', () => {

    test('should create a new store', async ({ page }) => {
        // You are ALREADY logged in here! Just navigate directly to the page you need.
        await page.goto('/store-management');

        // -> Rest of your Playwright implementation here...
    });

});
