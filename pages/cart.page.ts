import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './base.page';

export class CartPage extends BasePage {
  readonly pageTitle: Locator;
  readonly cartContents: Locator;
  readonly quantityHeading: Locator;
  readonly descriptionHeading: Locator;
  readonly cartItems: Locator;
  readonly continueShoppingButton: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    super(page);
    this.pageTitle = page.getByText('Your Cart', { exact: true });
    this.cartContents = page.locator('.cart_contents_container');
    this.quantityHeading = page.getByText('QTY', { exact: true });
    this.descriptionHeading = page.getByText('Description', { exact: true });
    this.cartItems = page.locator('.cart_item');
    this.continueShoppingButton = page.getByRole('button', { name: 'Continue Shopping' });
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
  }

  cartItem(name: string): Locator {
    return this.cartItems.filter({ has: this.page.getByRole('button', { name: `View details for ${name}` }) });
  }

  productDetailsButton(name: string): Locator {
    return this.page.getByRole('button', { name: `View details for ${name}` });
  }

  removeButton(name: string): Locator {
    return this.cartItem(name).getByRole('button', { name: 'Remove' });
  }
}
