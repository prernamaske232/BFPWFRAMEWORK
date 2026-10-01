# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: paymentPageTest.spec.ts >> Payment Page >> complete payment and verify order confirmation
- Location: tests\paymentPageTest.spec.ts:12:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('India', { exact: true }).last()

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "🎯 I'll help you prepare for your next QA job — Explore the QA Career Accelerator." [ref=e11] [cursor=pointer]:
      - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart 1" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
          - generic [ref=e22]: "1"
      - listitem [ref=e23] [cursor=pointer]:
        - button "Sign Out" [ref=e24]:
          - generic [aria-hidden] [ref=e25]: 
          - text: Sign Out
  - generic [ref=e28]:
    - generic [ref=e32]:
      - generic [ref=e33]: ADIDAS ORIGINAL
      - generic [ref=e34]: $ 11500
      - generic [ref=e35]: "Quantity: 1"
      - list [ref=e37]:
        - listitem [ref=e38]: Apple phone
    - generic [ref=e41]:
      - generic [ref=e42]: Payment Method
      - generic [ref=e43]:
        - generic [ref=e44] [cursor=pointer]: Credit Card
        - generic [ref=e45] [cursor=pointer]: Paypal
        - generic [ref=e46] [cursor=pointer]: SEPA
        - generic [ref=e47] [cursor=pointer]: Invoice
      - generic [ref=e48]:
        - generic [ref=e49]:
          - generic [ref=e50]: Personal Information
          - generic [ref=e52]:
            - generic [ref=e54]:
              - generic [ref=e55]: Credit Card Number
              - textbox [ref=e56]: 4542 9931 9292 2293
            - generic [ref=e57]:
              - generic [ref=e58]:
                - generic [ref=e59]: Expiry Date
                - combobox [ref=e60]:
                  - option "01"
                  - option "02"
                  - option "03"
                  - option "04"
                  - option "05"
                  - option "06"
                  - option "07"
                  - option "08"
                  - option "09"
                  - option "10"
                  - option "11"
                  - option "12" [selected]
                - combobox [ref=e61]:
                  - option "01"
                  - option "02"
                  - option "03"
                  - option "04"
                  - option "05"
                  - option "06"
                  - option "07"
                  - option "08"
                  - option "09"
                  - option "10"
                  - option "11"
                  - option "12"
                  - option "13"
                  - option "14"
                  - option "15"
                  - option "16"
                  - option "17"
                  - option "18"
                  - option "19"
                  - option "20"
                  - option "21"
                  - option "22"
                  - option "23"
                  - option "24"
                  - option "25"
                  - option "26"
                  - option "27"
                  - option "28"
                  - option "29"
                  - option "30" [selected]
                  - option "31"
              - generic [ref=e62]:
                - generic [ref=e63]: CVV Code ?
                - textbox [ref=e64]: "123"
            - generic [ref=e66]:
              - generic [ref=e67]: Name on Card
              - textbox [ref=e68]: John Doe
            - generic [ref=e69]:
              - generic [ref=e70]:
                - generic [ref=e71]: Apply Coupon
                - textbox [ref=e72]
              - button "Apply Coupon" [ref=e75] [cursor=pointer]
        - generic [ref=e76]:
          - generic [ref=e77]: Shipping Information
          - generic [ref=e79]:
            - generic [ref=e80]: jegow99556@flosek.com
            - textbox [ref=e81]: jegow99556@flosek.com
            - textbox "Select Country" [active] [ref=e84]: India
            - generic [ref=e85]: Place Order
```

# Test source

```ts
  1  | import { Locator, Page } from '@playwright/test';
  2  | 
  3  | export class paymentPage {
  4  |   page: Page;
  5  |   cardNumber: Locator;
  6  |   expiryMonth: Locator;
  7  |   expiryYear: Locator;
  8  |   cvv: Locator;
  9  |   nameOnCard: Locator;
  10 |   country: Locator;
  11 |   placeOrder: Locator;
  12 |   orderConfirmation: Locator;
  13 |   orderNumber: Locator;
  14 | 
  15 |   constructor(page: Page) {
  16 |     this.page = page;
  17 |     this.cardNumber = this.page.locator('input[type="text"]').nth(0);
  18 |     this.expiryMonth = this.page.locator('select').nth(0);
  19 |     this.expiryYear = this.page.locator('select').nth(1);
  20 |     this.cvv = this.page.locator('input[type="text"]').nth(1);
  21 |     this.nameOnCard = this.page.locator('input[type="text"]').nth(2);
  22 |     this.country = this.page.getByPlaceholder('Select Country');
  23 |     this.placeOrder = this.page.getByText('Place Order', { exact: true });
  24 |     this.orderConfirmation = this.page.getByText(/Thank you for shopping with us/i);
  25 |     this.orderNumber = this.page.locator('label').filter({ hasText: /[a-f0-9]{24}/i });
  26 |   }
  27 | 
  28 |   async enterPaymentDetails(cardNumber: string, month: string, year: string, cvv: string, name: string, country: string): Promise<void> {
  29 |     await this.cardNumber.fill(cardNumber);
  30 |     await this.expiryMonth.selectOption(month);
  31 |     await this.expiryYear.selectOption(year);
  32 |     await this.cvv.fill(cvv);
  33 |     await this.nameOnCard.fill(name);
  34 |     await this.country.fill(country);
  35 |     await this.page.getByText(country, { exact: true }).last().click();
  36 |   }
  37 | 
  38 |   async placeOrderAndConfirm(): Promise<void> {
  39 |     await this.placeOrder.click();
  40 |   }
  41 | }
  42 | 
     |               ^ Error: locator.click: Test timeout of 30000ms exceeded.
```