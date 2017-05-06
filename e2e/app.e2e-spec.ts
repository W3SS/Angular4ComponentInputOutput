import { SuspectsPage } from './app.po';

describe('suspects App', () => {
  let page: SuspectsPage;

  beforeEach(() => {
    page = new SuspectsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
