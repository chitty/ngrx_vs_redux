import { PReduxPage } from './app.po';

describe('p-redux App', function() {
  let page: PReduxPage;

  beforeEach(() => {
    page = new PReduxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
