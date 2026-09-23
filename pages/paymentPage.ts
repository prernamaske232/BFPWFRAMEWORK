import { Locator, Page } from '@playwright/test';

export class paymentPage {
  page: Page;
  cardNumber: Locator;
  expiryMonth: Locator;
  expiryYear: Locator;
  cvv: Locator;
  nameOnCard: Locator;
  country: Locator;
  placeOrder: Locator;
  orderConfirmation: Locator;
  orderNumber: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cardNumber = this.page.locator('input[type="text"]').nth(0);
    this.expiryMonth = this.page.locator('select').nth(0);
    this.expiryYear = this.page.locator('select').nth(1);
    this.cvv = this.page.locator('input[type="text"]').nth(1);
    this.nameOnCard = this.page.locator('input[type="text"]').nth(2);
    this.country = this.page.getByPlaceholder('Select Country');
    this.placeOrder = this.page.getByText('Place Order', { exact: true });
    this.orderConfirmation = this.page.getByText(/Thank you for shopping with us/i);
    this.orderNumber = this.page.locator('label').filter({ hasText: /[a-f0-9]{24}/i });
  }

  async enterPaymentDetails(cardNumber: string, month: string, year: string, cvv: string, name: string, country: string): Promise<void> {
    await this.cardNumber.fill(cardNumber);
    await this.expiryMonth.selectOption(month);
    await this.expiryYear.selectOption(year);
    await this.cvv.fill(cvv);
    await this.nameOnCard.fill(name);
    await this.country.fill(country);
    await this.page.getByText(country, { exact: true }).last().click();
  }

  async placeOrderAndConfirm(): Promise<void> {
    await this.placeOrder.click();
  }
}
