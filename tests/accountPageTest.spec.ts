import { test, expect } from '@playwright/test'
import { AccountPage } from '../pages/accountPage'

const bankUrl = 'https://qaplayground.com/bank/login'
const accountUrl = 'https://qaplayground.com/bank/accounts'
const username = 'standard_user'
const password = 'bank_sauce'

async function loginToBank(page: any) {
    await page.goto(bankUrl)
    await page.getByPlaceholder('Enter username').fill(username)
    await page.getByPlaceholder('Enter password').fill(password)
    await page.getByRole('button', { name: /Sign In/i }).click()
    await page.waitForURL('**/bank/dashboard')
}

test('verify accounts page for standard user', async ({ page }) => {
    const accountPage = new AccountPage(page)

    await loginToBank(page)
    await page.goto(accountUrl)

    await accountPage.verifyAccountsPageVisible()
    await expect(accountPage.pageTitle).toBeVisible()
    await expect(accountPage.accountsTable).toBeVisible()

    const accountNames = await accountPage.getAccountNames()
    expect(accountNames.length).toBeGreaterThan(0)
    expect(accountNames[0]).toContain('Everyday Checking')
})

test('open add account form from accounts page', async ({ page }) => {
    const accountPage = new AccountPage(page)

    await loginToBank(page)
    await page.goto(accountUrl)
    await accountPage.clickAddAccount()

    await expect(page.getByRole('heading', { name: /add account|new account|account details/i })).toBeVisible()
})

test('open view action for an existing account', async ({ page }) => {
    const accountPage = new AccountPage(page)

    await loginToBank(page)
    await page.goto(accountUrl)

    await accountPage.clickViewAccount('Everyday Checking')
    await expect(page.url()).toContain('/bank/accounts/')
})

test('open edit action for an existing account', async ({ page }) => {
    const accountPage = new AccountPage(page)

    await loginToBank(page)
    await page.goto(accountUrl)

    await accountPage.clickEditAccount('Everyday Checking')
    await expect(page.url()).toContain('/bank/accounts/')
})
