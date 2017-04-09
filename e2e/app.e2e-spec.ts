import { NgSelect2Page } from './app.po';

describe('ng-select2 App', () => {
  let page: NgSelect2Page;

  beforeEach(() => {
    page = new NgSelect2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
