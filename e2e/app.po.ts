import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getQuestionsCount() {
    return element.all(by.css('app-root .question')).count();
  }
}
