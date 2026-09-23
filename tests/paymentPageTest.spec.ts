import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { dashboardPage } from '../pages/dashboardPage';
import { cartPage } from '../pages/cartPage';
import { paymentPage } from '../pages/paymentPage';
import loginData from '../testdata/login.json';
import paymentData from '../testdata/payment.json';

const productName = 'ADIDAS ORIGINAL';

test.describe('Payment Page', () => {
  test('complete payment and verify order confirmation', async ({ page }) => {
    const login = new LoginPage(page);
    const dashboard = new dashboardPage(page);
    const cart = new cartPage(page);
    const payment = new paymentPage(page);

    // Log in to the application.
    await login.launchUrl(loginData.url);
    await login.loginintoapplication(loginData.email, loginData.password);
    await expect(login.homePageIdentifier).toBeVisible();

    // Add a product and open the cart.
    await dashboard.searchAndAddProduct(productName, 1);
    await expect(dashboard.addtocartMessage).toBeVisible();
    await cart.openCart();
    await expect(cart.product(productName)).toBeVisible();

    // Move to the payment page.
    await cart.proceedToCheckout();
    await expect(payment.cardNumber).toBeVisible();

    // Enter payment details and place the order.
    await payment.enterPaymentDetails(
      paymentData.cardNumber,
      paymentData.expiryMonth,
      paymentData.expiryYear,
      paymentData.cvv,
      paymentData.nameOnCard,
      paymentData.country,
    );
    await payment.placeOrderAndConfirm();

    // Verify the order confirmation.
    await expect(payment.orderConfirmation).toBeVisible();
    await expect(payment.orderNumber).toBeVisible();
  });
});
