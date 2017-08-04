import { NotepadjsPage } from './app.po';

describe('notepadjs App', () => {
  let page: NotepadjsPage;

  beforeEach(() => {
    page = new NotepadjsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
