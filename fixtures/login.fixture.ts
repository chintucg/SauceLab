import { type Page, test as base } from '@playwright/test';
import { LoginPage } from '../pages';
import loginTestData from '../test-data/login.json';

type LoginFixtures = {
  loggedInPage: Page;
};

export const test = base.extend<LoginFixtures>({
  loggedInPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(
      loginTestData.acceptedUsernames[0],
      loginTestData.passwordForAllUsers,
    );
    await use(page);
  },
});

export { expect } from '@playwright/test';
