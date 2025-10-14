import { test, expect } from '@playwright/test';
import { readProductUpdated, readProductId } from '../utils/sharedData';

/* 
Since https://dummyjson.com/docs/products#products-delete
Deleting a product will not delete it into the server
Then we will just get a product with a fixed id

For demonstration purposes, we will just get the product with id 194 for getting and deleting the product
And the product id that we updated from test 03 will be run just to make sure the product id and product price is stored in product_updated.json and not undefined
*/

test('Delete Product - From File Test 03', async ({ request }) => {
    const { id: productId } = readProductUpdated();
    const response = await request.delete(`/products/${productId}`); // get the product id from product_updated.json
    const responseBody = await response.json();
    expect(response.status()).toBe(200);
    expect(responseBody.isDeleted).toBe(true)
});

test('Verify Deleted Product', async ({ request }) => {
    const productId = readProductId();
    const response = await request.get(`/products/${productId}`); // get the product id from product.json
    const responseBody = await response.json();
    expect(response.status()).toBe(404); // I use the product from Test 02 since the product product will not add it into the server
    console.log('Response Body:', responseBody);
});