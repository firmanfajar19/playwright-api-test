import { test, expect } from '@playwright/test';
import { saveProductId } from '../utils/sharedData';

test('Create Product', async ({ request }) => {
    const response = await request.post(`/products/add`, {
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            title: process.env.TITLE_PRODUCT,
            description: process.env.DESCRIPTION_PRODUCT,
            price: Number(process.env.PRICE_UPDATE),
        },

    });

    const responseBody = await response.json();
    expect(response.status()).toBe(201);
    expect(responseBody.title).toBe(process.env.TITLE_PRODUCT);

    saveProductId(responseBody.id);
});