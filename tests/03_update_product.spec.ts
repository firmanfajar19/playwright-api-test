import { test, expect } from '@playwright/test';
import { readProductId } from '../utils/sharedData';
import { saveProductUpdated } from '../utils/sharedData';

/* 
Since https://dummyjson.com/docs/products#products-add
Adding a new product will not add it into the server
Then we will just get a product with a fixed id

For demonstration purposes, we will just get the product with id 194 for getting and updating the product
And the product id that we created from test 02 will be run just to make sure the product id is stored in product.json and not undefined
*/

test('Get Product - From File Test 02', async ({ request }) => {
    const productId = readProductId();
    const response = await request.get(`products/${productId}`); // get the product id from product.json
    const responseBody = await response.json();
    expect(response.status()).toBe(404); // since the product is not really created, it will return 404
    console.log('Response Body:', responseBody);
});

test('Get Product With Fixed Id', async ({ request }) => {
    const response = await request.get(`products/194`);
    const responseBody = await response.json();
    expect(response.status()).toBe(200);
    process.env.PRODUCT_ID = responseBody.id;
});

test('Update Product', async ({ request }, testInfo) => {
    const productId = process.env.PRODUCT_ID
    const response = await request.put(`products/${productId}`, {
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            title: `${process.env.TitleUpdated}`,
            description: `${process.env.DescriptionUpdated}`,
            price: Number(`${process.env.PriceUpdated}`).toString(),
        },
    });

    const responseBody = await response.json();
    expect(response.status()).toBe(200);
    expect(responseBody.title).toBe(`${process.env.TitleUpdated}`);
    expect(responseBody.price).toBe(Number(`${process.env.PriceUpdated}`).toString());
    expect(responseBody.description).toBe(`${process.env.DescriptionUpdated}`);

    saveProductUpdated(responseBody.id, responseBody.price);
});
