const { device, element, by } = require('detox');

describe('Navigation Flow Test', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
  });

  it('should navigate from Home to Details screen', async () => {
    // Check if the initial screen is rendered
    await expect(element(by.id('welcome'))).toBeVisible();

    // Tap on the "Go to Details" button to navigate
    await element(by.id('goto-details')).tap();

    // Wait for the Details screen to appear
    await expect(element(by.text('Details Screen'))).toBeVisible();
  });
  it('should navigate from Details screen to Home screen', async () => {
    // Wait for the Details screen to appear
    await expect(element(by.text('Details Screen'))).toBeVisible();

    await element(by.id('goto-home')).tap();

    await expect(element(by.text('Welcome Dhrupal Rafaliya'))).toBeVisible();
  });
});
