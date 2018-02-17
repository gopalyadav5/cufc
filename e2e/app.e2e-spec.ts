import { CufcPage } from './app.po';

describe('cufc App', () => {
  let page: CufcPage;

  beforeEach(() => {
    page = new CufcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
