import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { dashboardPage } from '../pages/dashboardPage';
import { cartPage } from '../pages/cartPage';
import loginData from '../testdata/login.json';

const productName = 'ADIDAS ORIGINAL';

test.describe('Cart Page', () => {
  test('add product and verify it in the cart', async ({ page }) => {
    const login = new LoginPage(page);
    const dashboard = new dashboardPage(page);
    const cart = new cartPage(page);

    // Log in to the application.
    await login.launchUrl(loginData.url);
    await login.loginintoapplication(loginData.email, loginData.password);
    await expect(login.homePageIdentifier).toBeVisible();

    // Add the product to the cart.
    await dashboard.searchAndAddProduct(productName, 1);
    await expect(dashboard.addtocartMessage).toBeVisible();

    // Open the cart and verify the product.
    await cart.openCart();
    await expect(cart.product(productName)).toBeVisible();
  });
});
