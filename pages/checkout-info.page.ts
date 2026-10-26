import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './base.page';

export class CheckoutInfoPage extends BasePage {
  readonly pageTitle: Locator;
  readonly checkoutForm: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly errorMessage: Locator;
  readonly errorCloseButton: Locator;
  readonly cancelButton: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    super(page);
    this.pageTitle = page.getByText('Checkout: Your Information', { exact: true });
    this.checkoutForm = page.getByRole('form', { name: 'Checkout information' });
    this.firstNameInput = page.getByPlaceholder('First Name');
    this.lastNameInput = page.getByPlaceholder('Last Name');
    this.postalCodeInput = page.getByPlaceholder('Zip/Postal Code');
    this.errorMessage = page.locator('[data-test="error"]');
    this.errorCloseButton = page.getByRole('button', { name: 'Close Error' });
    this.cancelButton = page.getByRole('button', { name: 'Cancel' });
    this.continueButton = page.getByRole('button', { name: 'Continue' });
  }

  async enterInformation(firstName: string, lastName: string, postalCode: string): Promise<void> {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
  }
}
