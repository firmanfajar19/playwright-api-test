import { test, expect } from '@playwright/test';
import { saveProductId } from '../utils/sharedData';

test('Create Product', async ({ request }, testInfo) => {
    const response = await request.post(`products/add`, {
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            title: `${process.env.Title}`,
            description: `${process.env.Description}`,
            price: Number(`${process.env.PriceUpdated}`).toString(),
        },

    });

    const responseBody = await response.json();

    expect(response.status()).toBe(201);
    expect(responseBody.title).toBe(`${process.env.Title}`);

    saveProductId(responseBody.id);
});