## Name: Firman Fajar Kurniawan
---
### Test Automation API (Playwright + DummyJSON)
Test Suite Scenario: Product Management — create 5 separate test spec files that test the workflow sequentially.

### NOTES
For Endpoint:
- https://dummyjson.com/docs/products#products-add
- https://dummyjson.com/docs/products#products-update
- https://dummyjson.com/docs/products#products-delete

Adding Updating and Deleting a product will not impact it into the server https://dummyjson.com/. So for demonstration purposes, we will just get the product with id 194 for getting, updating, deleting the product, And the product id that we created or updated will be run just to make sure the product id and product price is stored in test data and not undefined

---
To run the test, it can be done by running the following command:
```
npx playwright test
```
