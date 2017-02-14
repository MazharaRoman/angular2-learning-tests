import { MyBestTestPage } from './app.po';

describe('my-best-test App', function() {
  let page: MyBestTestPage;

  beforeEach(() => {
    page = new MyBestTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
