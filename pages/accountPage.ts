import { Locator, Page } from "@playwright/test";

export class AccountPage {
    page: Page
    pageTitle: Locator
    addAccountButton: Locator
    accountsTable: Locator
    accountRows: Locator
    viewButton: Locator
    editButton: Locator
    deleteButton: Locator

    constructor(page: Page) {
        this.page = page
        this.pageTitle = this.page.getByRole('heading', { name: 'My Accounts' })
        this.addAccountButton = this.page.getByRole('button', { name: 'Add Account' })
        this.accountsTable = this.page.getByRole('table', { name: 'Accounts' })
        this.accountRows = this.accountsTable.locator('tbody tr')
        this.viewButton = this.page.getByRole('button', { name: 'View' })
        this.editButton = this.page.getByRole('button', { name: /Edit/ })
        this.deleteButton = this.page.getByRole('button', { name: /Delete/ })
    }

    async launchUrl(url: string) {
        await this.page.goto(url)
    }

    async openAccountsPage(url: string = 'https://qaplayground.com/bank/accounts') {
        await this.page.goto(url)
    }

    async verifyAccountsPageVisible() {
        await this.pageTitle.waitFor({ state: 'visible' })
        await this.accountsTable.waitFor({ state: 'visible' })
    }

    async clickAddAccount() {
        await this.addAccountButton.click()
    }

    async getAccountNames(): Promise<string[]> {
        const accountNames: string[] = []
        const rows = await this.accountRows.all()

        for (const row of rows) {
            const rowText = await row.textContent()
            if (!rowText) continue

            const cleanedText = rowText.replace(/\s+View\s+.*$/s, '').trim()
            if (cleanedText) {
                accountNames.push(cleanedText)
            }
        }

        return accountNames
    }

    async clickViewAccount(accountName: string) {
        const accountRow = this.accountRows.filter({ hasText: accountName })
        await accountRow.getByRole('button', { name: 'View' }).click()
    }

    async clickEditAccount(accountName: string) {
        const accountRow = this.accountRows.filter({ hasText: accountName })
        await accountRow.getByRole('button', { name: /Edit/ }).click()
    }

    async clickDeleteAccount(accountName: string) {
        const accountRow = this.accountRows.filter({ hasText: accountName })
        await accountRow.getByRole('button', { name: /Delete/ }).click()
    }
}
