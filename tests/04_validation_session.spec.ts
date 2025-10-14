import { test, expect } from '@playwright/test';
import { readProductUpdated } from '../utils/sharedData';

/* 
Since https://dummyjson.com/docs/products#products-update
Updating a product will not update it into the server.
Then we will just get a product with a fixed id

For demonstration purposes, we will just get the product with id 194 for getting and updating the product
And the product id that we updated from test 03 will be run just to make sure the product id and product price is stored in product_updated.json and not undefined
*/

test('Final Validation Session', async ({ request }) => {
    const { id: productId, price: productPrice } = readProductUpdated();
    console.log('Product ID:', `${productId}`); // retrieve id from product_updated.json
    console.log('Product Price:', `${productPrice}`); // retrieve price from product_updated.json

    const response = await request.get(`/products/${productId}`); // retrieve id from product_updated.json
});

test('Session Failure', async ({ request }) => {
    const response = await request.get('/auth/me', {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    expect(response.status()).toBe(401);

    const responseBody = await response.json();
    console.log('Response Body:', responseBody);

});

test('Session Success', async ({ request }) => {
    const response = await request.get('/auth/me', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.AUTH_TOKEN}`
        },
    });
    
    expect(response.status()).toBe(200)
});