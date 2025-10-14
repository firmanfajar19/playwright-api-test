import { expect, request } from '@playwright/test';

async function globalSetup() {
    const context = await request.newContext();
    const response = await context.post(`${process.env.BASE_URL}/auth/login`, {
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            username: process.env.VALID_USERNAME,
            password: process.env.VALID_PASSWORD,
        },
        
    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    process.env.AUTH_TOKEN = responseBody.accessToken;
}

export default globalSetup;