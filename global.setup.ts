import { expect, request } from '@playwright/test';

async function globalSetup() {
    const baseURL = process.env.BASE_URL || 'https://dummyjson.com';
    const context = await request.newContext();
    const response = await context.post(`${baseURL}/auth/login`, {
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 30,
        },
        
    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    process.env.AUTH_TOKEN = responseBody.accessToken;
}

export default globalSetup;