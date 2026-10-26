import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './base.page';

export class CheckoutOverviewPage extends BasePage {
  readonly pageTitle: Locator;
  readonly overview: Locator;
  readonly cartItems: Locator;
  readonly paymentInformationLabel: Locator;
  readonly paymentInformationValue: Locator;
  readonly shippingInformationLabel: Locator;
  readonly shippingInformationValue: Locator;
  readonly priceTotalLabel: Locator;
  readonly itemTotal: Locator;
  readonly tax: Locator;
  readonly total: Locator;
  readonly cancelButton: Locator;
  readonly finishButton: Locator;

  constructor(page: Page) {
    super(page);
    this.pageTitle = page.getByText('Checkout: Overview', { exact: true });
    this.overview = page.locator('.checkout_summary_container');
    this.cartItems = page.locator('.cart_item');
    this.paymentInformationLabel = page.getByText('Payment Information:', { exact: true });
    this.paymentInformationValue = page.locator('.summary_value_label').first();
    this.shippingInformationLabel = page.getByText('Shipping Information:', { exact: true });
    this.shippingInformationValue = page.locator('.summary_value_label').nth(1);
    this.priceTotalLabel = page.getByText('Price Total', { exact: true });
    this.itemTotal = page.locator('.summary_subtotal_label');
    this.tax = page.locator('.summary_tax_label');
    this.total = page.locator('.summary_total_label');
    this.cancelButton = page.getByRole('button', { name: 'Cancel' });
    this.finishButton = page.getByRole('button', { name: 'Finish' });
  }

  cartItem(name: string): Locator {
    return this.cartItems.filter({ has: this.page.getByRole('button', { name: `View details for ${name}` }) });
  }
}
