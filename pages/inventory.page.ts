import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './base.page';

export class InventoryPage extends BasePage {
  readonly pageTitle: Locator;
  readonly sortSelect: Locator;
  readonly products: Locator;
  readonly productCards: Locator;
  readonly footerCopyright: Locator;

  constructor(page: Page) {
    super(page);
    this.pageTitle = page.getByText('Products', { exact: true });
    this.sortSelect = page.getByRole('combobox', { name: 'Sort products' });
    this.products = page.locator('.inventory_list');
    this.productCards = page.locator('.inventory_item');
    this.footerCopyright = this.footer.getByText(/© .* Sauce Labs/);
  }

  productCard(name: string): Locator {
    return this.productCards.filter({ has: this.viewProductButton(name) });
  }

  productName(name: string): Locator {
    return this.page.getByRole('button', { name: `View details for ${name}` });
  }

  viewProductButton(name: string): Locator {
    return this.page.getByRole('button', { name: `View details for ${name}` });
  }

  addToCartButton(name: string): Locator {
    return this.productCard(name).getByRole('button', { name: 'Add to cart' });
  }

  removeFromCartButton(name: string): Locator {
    return this.productCard(name).getByRole('button', { name: 'Remove' });
  }
}
