import { type Locator, type Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  readonly header: Locator;
  readonly brandName: Locator;
  readonly openMenuButton: Locator;
  readonly closeMenuButton: Locator;
  readonly menuNavigation: Locator;
  readonly allItemsButton: Locator;
  readonly dynamicCatalogButton: Locator;
  readonly lazyLoadButton: Locator;
  readonly spinnerButton: Locator;
  readonly sliderButton: Locator;
  readonly aboutLink: Locator;
  readonly logoutButton: Locator;
  readonly resetAppStateButton: Locator;
  readonly cartButton: Locator;
  readonly footer: Locator;
  readonly socialLinks: Locator;
  readonly xLink: Locator;
  readonly facebookLink: Locator;
  readonly linkedInLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = page.getByRole('banner');
    this.brandName = page.getByText('Swag Labs', { exact: true });
    this.openMenuButton = page.getByRole('button', { name: 'Open Menu' });
    this.closeMenuButton = page.getByRole('button', { name: 'Close Menu' });
    this.menuNavigation = page.getByRole('navigation');
    this.allItemsButton = page.getByRole('button', { name: 'All Items' });
    this.dynamicCatalogButton = page.getByRole('button', { name: 'Dynamic Catalog' });
    this.lazyLoadButton = page.getByRole('button', { name: 'Lazy Load' });
    this.spinnerButton = page.getByRole('button', { name: 'Spinner' });
    this.sliderButton = page.getByRole('button', { name: 'Slider' });
    this.aboutLink = page.getByRole('link', { name: 'About' });
    this.logoutButton = page.getByRole('button', { name: 'Logout' });
    this.resetAppStateButton = page.getByRole('button', { name: 'Reset App State' });
    this.cartButton = page.getByRole('button', { name: /Cart/ });
    this.footer = page.getByRole('contentinfo');
    this.socialLinks = this.footer.getByRole('list');
    this.xLink = this.footer.getByRole('link', { name: 'X' });
    this.facebookLink = this.footer.getByRole('link', { name: 'Facebook' });
    this.linkedInLink = this.footer.getByRole('link', { name: 'LinkedIn' });
  }
}
