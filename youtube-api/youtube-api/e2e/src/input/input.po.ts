import { promise, browser, ElementFinder, by, element } from 'protractor';

export class InputPage {
  navigateTo(): promise.Promise<any> {
    return browser.get(browser.baseUrl);
  }

  getTheInput(): ElementFinder {
    return element(by.css('input'));
  }
}
