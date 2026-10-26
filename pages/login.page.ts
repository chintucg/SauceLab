import { type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly logo: Locator;
  readonly loginForm: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly errorCloseButton: Locator;
  readonly acceptedUsernames: Locator;
  readonly sharedPassword: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logo = page.locator('.login_logo');
    this.loginForm = page.getByRole('form', { name: 'Login' });
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.errorMessage = page.locator('[data-test="error"]');
    this.errorCloseButton = page.getByRole('button', { name: 'Close Error' });
    this.acceptedUsernames = page.getByText('Accepted usernames are:');
    this.sharedPassword = page.getByText('Password for all users:');
  }

  async goto(): Promise<void> {
    await this.page.goto('/');
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
