import { AppPage } from './app.po';

describe('questionnaire-render-demo App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display questions', () => {
    page.navigateTo();
    const questionCount = page.getQuestionsCount();
    questionCount.then((count) => {
      console.log(`Question count: ${count}`);
    });
    expect(questionCount).toBeGreaterThan(0);
  });
});
