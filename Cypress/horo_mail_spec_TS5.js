describe('Name secret TS5', () => {
  beforeEach(() => {
    cy.visit('https://horo.mail.ru/namesecret/')
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })  
  })
  
  it('TC65', () => {
    cy.get('[href="/namesecret/female/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/female/a/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/female/a/')
    cy.get('body').should('contain','Анастасия').and('not.contain','Анатолий')
  })
  it('TC66', () => {
    cy.get('[href="/namesecret/female/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/female/b/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/female/b/')
    cy.get('body').should('contain','Барбара').and('not.contain','Бахман')
  })
  it('TC67', () => {
    cy.get('[href="/namesecret/female/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/female/v/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/female/v/')
    cy.get('body').should('contain','Вера').and('not.contain','Вениамин')
  })
  it('TC68', () => {
    cy.get('[href="/namesecret/female/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/female/g/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/female/g/')
    cy.get('body').should('contain','Гюзель').and('not.contain','Гений')
  })
  it('TC69', () => {
    cy.get('[href="/namesecret/female/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/female/d/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/female/d/')
    cy.get('body').should('contain','Дарина').and('not.contain','Даниил')
  })
  it('TC70', () => {
    cy.get('[href="/namesecret/female/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/female/e/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/female/e/')
    cy.get('body').should('contain','Екатерина').and('not.contain','Евангел')
  })
  it('TC71', () => {
    cy.get('[href="/namesecret/female/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/female/zh/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/female/zh/')
    cy.get('body').should('contain','Жанна').and('not.contain','Ждан')
  })
  it('TC72', () => {
    cy.get('[href="/namesecret/female/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/female/z/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/female/z/')
    cy.get('body').should('contain','Зинаида').and('not.contain','Зиновий')
  })
  it('TC73', () => {
    cy.get('[href="/namesecret/female/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/female/i/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/female/i/')
    cy.get('body').should('contain','Инга').and('not.contain','Игнатий')
  })
  it('TC74', () => {
    cy.get('[href="/namesecret/female/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/female/k/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/female/k/')
    cy.get('body').should('contain','Каролина').and('not.contain','Капитон')
  })
  it('TC75', () => {
    cy.get('[href="/namesecret/female/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/female/l/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/female/l/')
    cy.get('body').should('contain','Людмила').and('not.contain','Лукьян')
  })
  it('TC76', () => {
    cy.get('[href="/namesecret/female/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/female/m/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/female/m/')
    cy.get('body').should('contain','Мария').and('not.contain','Михаил')
  })
  it('TC77', () => {
    cy.get('[href="/namesecret/female/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/female/n/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/female/n/')
    cy.get('body').should('contain','Нелли').and('not.contain','Наум')
  })
  it('TC78', () => {
    cy.get('[href="/namesecret/female/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/female/o/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/female/o/')
    cy.get('body').should('contain','Ольга').and('not.contain','Олег')
  })
  it('TC79', () => {
    cy.get('[href="/namesecret/female/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/female/p/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/female/p/')
    cy.get('body').should('contain','Полина').and('not.contain','Петр')
  })
  it('TC80', () => {
    cy.get('[href="/namesecret/female/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/female/r/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/female/r/')
    cy.get('body').should('contain','Римма').and('not.contain','Роман')
  })
  it('TC81', () => {
    cy.get('[href="/namesecret/female/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/female/s/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/female/s/')
    cy.get('body').should('contain','Сабина').and('not.contain','Симеон')
  })
  it('TC82', () => {
    cy.get('[href="/namesecret/female/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/female/t/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/female/t/')
    cy.get('body').should('contain','Таисия').and('not.contain','Тимофей')
  })
  it('TC83', () => {
    cy.get('[href="/namesecret/female/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/female/u/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/female/u/')
    cy.get('body').should('contain','Ульяна').and('not.contain','Умар')
  })
  it('TC84', () => {
    cy.get('[href="/namesecret/female/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/female/f/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/female/f/')
    cy.get('body').should('contain','Фатима').and('not.contain','Федор')
  })
  it('TC85', () => {
    cy.get('[href="/namesecret/female/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/female/h/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/female/h/')
    cy.get('body').should('contain','Христина').and('not.contain','Христофор')
  })
  it('TC86', () => {
    cy.get('[href="/namesecret/female/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/female/ts/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/female/ts/')
    cy.get('body').should('contain','Царина').and('not.contain','Цезарь')
  })
  it('TC87', () => {
    cy.get('[href="/namesecret/female/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/female/je/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/female/je/')
    cy.get('body').should('contain','Эмилия').and('not.contain','Эдгар')
  })
  it('TC88', () => {
    cy.get('[href="/namesecret/female/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/female/ju/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/female/ju/')
    cy.get('body').should('contain','Юлия').and('not.contain','Юлиан')
  })
  it('TC89', () => {
    cy.get('[href="/namesecret/female/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/female/ja/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/female/ja/')
    cy.get('body').should('contain','Яна').and('not.contain','Ярослав')
  })
})