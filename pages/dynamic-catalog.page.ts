import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './base.page';

export class DynamicCatalogPage extends BasePage {
  readonly pageTitle: Locator;
  readonly productImages: Locator;

  constructor(page: Page, catalogType: 'Lazy Load' | 'Spinner' | 'Slider') {
    super(page);
    this.pageTitle = page.getByText(`Dynamic Catalog - ${catalogType}`, { exact: true });
    this.productImages = page.getByRole('img', { name: /^(?!Open Menu|Close Menu).+/ });
  }

  product(name: string): Locator {
    return this.page.getByText(name, { exact: true });
  }

  productImage(name: string): Locator {
    return this.page.getByRole('img', { name, exact: true });
  }
}

export class DynamicCatalogLazyLoadPage extends DynamicCatalogPage {
  constructor(page: Page) {
    super(page, 'Lazy Load');
  }
}

export class DynamicCatalogSpinnerPage extends DynamicCatalogPage {
  readonly loadingStatus: Locator;

  constructor(page: Page) {
    super(page, 'Spinner');
    this.loadingStatus = page.getByRole('status', { name: 'Loading' });
  }
}

export class DynamicCatalogSliderPage extends DynamicCatalogPage {
  readonly productSelectors: Locator;

  constructor(page: Page) {
    super(page, 'Slider');
    this.productSelectors = page.getByRole('button', { name: /^Show / });
  }

  showProductButton(name: string): Locator {
    return this.page.getByRole('button', { name: `Show ${name}` });
  }
}
