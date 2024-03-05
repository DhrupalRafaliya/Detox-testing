const { log } = require('detox');

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });

    await device.openURL({
      url: `exp+detox-testing://expo-development-client/?url=${encodeURIComponent(
        `http://localhost:8081`
      )}`,
    });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });
  // get by test id
  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  // get by text
  it('should have welcome screen with text Dhrupal', async () => {
    log.info('My First log');
    await expect(element(by.text('Welcome Dhrupal Rafaliya'))).toBeVisible();
  });

  it('Tapping button', async () => {
    await element(by.id('tappable')).tap();
    await expect(element(by.id('welcome-pratham'))).toBeVisible();
  });

  // it('It have vissible text Welcome Pratham', async () => {
  //   await expect(element(by.id('welcome-pratham'))).toBeVisible();
  // });


});