import { expect, test } from '../fixtures/login.fixture';
import {
  CartPage,
  CheckoutCompletePage,
  CheckoutInfoPage,
  CheckoutOverviewPage,
  DynamicCatalogLazyLoadPage,
  DynamicCatalogSliderPage,
  DynamicCatalogSpinnerPage,
  InventoryPage,
  ProductDetailsPage,
} from '../pages';

test('complete a purchase using the page objects', async ({ loggedInPage }) => {
  const inventoryPage = new InventoryPage(loggedInPage);
  await expect(inventoryPage.pageTitle).toBeVisible();
  await expect(inventoryPage.productCards).toHaveCount(6);
  await inventoryPage.viewProductButton('Sauce Labs Backpack').first().click();

  const productDetailsPage = new ProductDetailsPage(loggedInPage);
  await expect(productDetailsPage.productName).toHaveText('Sauce Labs Backpack');
  await productDetailsPage.addToCartButton.click();
  await productDetailsPage.cartButton.click();

  const cartPage = new CartPage(loggedInPage);
  await expect(cartPage.pageTitle).toBeVisible();
  await expect(cartPage.cartItem('Sauce Labs Backpack')).toBeVisible();
  await cartPage.checkoutButton.click();

  const checkoutInfoPage = new CheckoutInfoPage(loggedInPage);
  await checkoutInfoPage.enterInformation('Test', 'User', '12345');
  await checkoutInfoPage.continueButton.click();

  const checkoutOverviewPage = new CheckoutOverviewPage(loggedInPage);
  await expect(checkoutOverviewPage.paymentInformationValue).toHaveText('SauceCard #31337');
  await expect(checkoutOverviewPage.total).toContainText('Total: $32.39');
  await checkoutOverviewPage.finishButton.click();

  const checkoutCompletePage = new CheckoutCompletePage(loggedInPage);
  await expect(checkoutCompletePage.thankYouHeading).toBeVisible();
  await expect(checkoutCompletePage.backHomeButton).toBeVisible();
});

test('open each dynamic catalog page from the navigation menu', async ({ loggedInPage }) => {
  const inventoryPage = new InventoryPage(loggedInPage);
  await inventoryPage.openMenuButton.click();
  await inventoryPage.dynamicCatalogButton.click();
  await inventoryPage.lazyLoadButton.click();

  const lazyLoadPage = new DynamicCatalogLazyLoadPage(loggedInPage);
  await expect(lazyLoadPage.pageTitle).toBeVisible();
  await expect(lazyLoadPage.product('Sauce Labs Bike Light')).toBeVisible();

  await lazyLoadPage.openMenuButton.click();
  await lazyLoadPage.dynamicCatalogButton.click();
  await lazyLoadPage.spinnerButton.click();
  const spinnerPage = new DynamicCatalogSpinnerPage(loggedInPage);
  await expect(spinnerPage.pageTitle).toBeVisible();
  await expect(spinnerPage.product('Sauce Labs Bike Light')).toBeVisible();

  await spinnerPage.openMenuButton.click();
  await spinnerPage.dynamicCatalogButton.click();
  await spinnerPage.sliderButton.click();
  const sliderPage = new DynamicCatalogSliderPage(loggedInPage);
  await expect(sliderPage.pageTitle).toBeVisible();
  await expect(sliderPage.showProductButton('Sauce Labs Backpack')).toBeVisible();
});
