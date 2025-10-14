import { test, expect } from '@playwright/test';

test('Login Failed', async ({ request }) => {
    const response = await request.post(`auth/login`, {
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            username: 'invalid',
            password: 'invalid',
            expiresInMins: 30,
        },
    });

    expect(response.status()).toBe(400);

    const responseBody = await response.json();
    console.log('Response Body:', responseBody);
});