import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './base.page';

export class CheckoutCompletePage extends BasePage {
  readonly pageTitle: Locator;
  readonly ponyExpressImage: Locator;
  readonly thankYouHeading: Locator;
  readonly orderDispatchedMessage: Locator;
  readonly backHomeButton: Locator;
  readonly generatePdfButton: Locator;

  constructor(page: Page) {
    super(page);
    this.pageTitle = page.getByText('Checkout: Complete!', { exact: true });
    this.ponyExpressImage = page.getByRole('img', { name: 'Pony Express' });
    this.thankYouHeading = page.getByRole('heading', { name: 'Thank you for your order!' });
    this.orderDispatchedMessage = page.getByText(
      'Your order has been dispatched, and will arrive just as fast as the pony can get there!',
      { exact: true },
    );
    this.backHomeButton = page.getByRole('button', { name: 'Back Home' });
    this.generatePdfButton = page.getByRole('button', { name: 'Generate PDF order' });
  }
}
