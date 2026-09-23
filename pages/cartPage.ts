import { Locator, Page } from '@playwright/test';

export class cartPage {
  page: Page;
  cartItems: Locator;
  checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItems = this.page.locator('li').filter({ has: this.page.locator('h3') });
    this.checkoutButton = this.page.getByRole('button', { name: /Checkout/i });
  }

  async openCart(): Promise<void> {
    await this.page.locator("[routerlink='/dashboard/cart']").click();
  }

  product(productName: string): Locator {
    return this.cartItems.filter({ hasText: productName });
  }

  async proceedToCheckout(): Promise<void> {
    await this.checkoutButton.click();
  }
}
