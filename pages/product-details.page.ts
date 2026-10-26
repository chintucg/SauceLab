import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './base.page';

export class ProductDetailsPage extends BasePage {
  readonly backToProductsButton: Locator;
  readonly productDetails: Locator;
  readonly productImage: Locator;
  readonly productName: Locator;
  readonly productDescription: Locator;
  readonly productPrice: Locator;
  readonly addToCartButton: Locator;
  readonly removeButton: Locator;

  constructor(page: Page) {
    super(page);
    this.backToProductsButton = page.getByRole('button', { name: 'Back to products' });
    this.productDetails = page.locator('.inventory_details');
    this.productImage = this.productDetails.getByRole('img');
    this.productName = this.productDetails.locator('.inventory_details_name');
    this.productDescription = this.productDetails.locator('.inventory_details_desc');
    this.productPrice = this.productDetails.locator('.inventory_details_price');
    this.addToCartButton = this.productDetails.getByRole('button', { name: 'Add to cart' });
    this.removeButton = this.productDetails.getByRole('button', { name: 'Remove' });
  }
}
