import { PppPage } from './app.po';

describe('ppp App', function() {
  let page: PppPage;

  beforeEach(() => {
    page = new PppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
