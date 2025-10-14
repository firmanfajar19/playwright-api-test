import { test, expect } from '@playwright/test';

test('Login Failed', async ({ request }) => {
    const response = await request.post(`/auth/login`, {
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            username: process.env.INVALID_USERNAME,
            password: process.env.INVALID_PASSWORD,
        },
    });

    const responseBody = await response.json();
    expect(response.status()).toBe(400);
    expect(responseBody.message).toBe('Invalid credentials');
});