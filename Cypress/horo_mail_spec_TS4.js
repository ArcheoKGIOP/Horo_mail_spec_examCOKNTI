describe('Name secret TS4', () => {
  beforeEach(() => {
    cy.visit('https://horo.mail.ru/namesecret/')
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })  
  })
  
  it('TC40', () => {
    cy.get('[href="/namesecret/male/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/male/a/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/male/a/')
    cy.get('body').should('contain','Анатолий').and('not.contain','Анастасия')
  })
  it('TC41', () => {
    cy.get('[href="/namesecret/male/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/male/b/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/male/b/')
    cy.get('body').should('contain','Бахман').and('not.contain','Барбара')
  })
  it('TC42', () => {
    cy.get('[href="/namesecret/male/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/male/v/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/male/v/')
    cy.get('body').should('contain','Вениамин').and('not.contain','Вера')
  })
  it('TC43', () => {
    cy.get('[href="/namesecret/male/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/male/g/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/male/g/')
    cy.get('body').should('contain','Гений').and('not.contain','Гюзель')
  })
  it('TC44', () => {
    cy.get('[href="/namesecret/male/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/male/d/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/male/d/')
    cy.get('body').should('contain','Даниил').and('not.contain','Дарина')
  })
  it('TC45', () => {
    cy.get('[href="/namesecret/male/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/male/e/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/male/e/')
    cy.get('body').should('contain','Евангел').and('not.contain','Екатерина')
  })
  it('TC46', () => {
    cy.get('[href="/namesecret/male/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/male/zh/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/male/zh/')
    cy.get('body').should('contain','Ждан').and('not.contain','Жанна')
  })
  it('TC47', () => {
    cy.get('[href="/namesecret/male/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/male/z/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/male/z/')
    cy.get('body').should('contain','Зиновий').and('not.contain','Зинаида')
  })
  it('TC48', () => {
    cy.get('[href="/namesecret/male/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/male/i/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/male/i/')
    cy.get('body').should('contain','Игнатий').and('not.contain','Инга')
  })
  it('TC49', () => {
    cy.get('[href="/namesecret/male/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/male/k/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/male/k/')
    cy.get('body').should('contain','Капитон').and('not.contain','Каролина')
  })
  it('TC50', () => {
    cy.get('[href="/namesecret/male/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/male/l/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/male/l/')
    cy.get('body').should('contain','Лукьян').and('not.contain','Людмила')
  })
  it('TC51', () => {
    cy.get('[href="/namesecret/male/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/male/m/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/male/m/')
    cy.get('body').should('contain','Михаил').and('not.contain','Мария')
  })
  it('TC52', () => {
    cy.get('[href="/namesecret/male/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/male/n/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/male/n/')
    cy.get('body').should('contain','Наум').and('not.contain','Нелли')
  })
  it('TC53', () => {
    cy.get('[href="/namesecret/male/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/male/o/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/male/o/')
    cy.get('body').should('contain','Олег').and('not.contain','Ольга')
  })
  it('TC54', () => {
    cy.get('[href="/namesecret/male/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/male/p/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/male/p/')
    cy.get('body').should('contain','Петр').and('not.contain','Полина')
  })
  it('TC55', () => {
    cy.get('[href="/namesecret/male/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/male/r/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/male/r/')
    cy.get('body').should('contain','Роман').and('not.contain','Римма')
  })
  it('TC56', () => {
    cy.get('[href="/namesecret/male/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/male/s/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/male/s/')
    cy.get('body').should('contain','Симеон').and('not.contain','Сабина')
  })
  it('TC57', () => {
    cy.get('[href="/namesecret/male/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/male/t/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/male/t/')
    cy.get('body').should('contain','Тимофей').and('not.contain','Таисия')
  })
  it('TC58', () => {
    cy.get('[href="/namesecret/male/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/male/u/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/male/u/')
    cy.get('body').should('contain','Умар').and('not.contain','Ульяна')
  })
  it('TC59', () => {
    cy.get('[href="/namesecret/male/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/male/f/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/male/f/')
    cy.get('body').should('contain','Федор').and('not.contain','Фатима')
  })
  it('TC60', () => {
    cy.get('[href="/namesecret/male/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/male/h/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/male/h/')
    cy.get('body').should('contain','Христофор').and('not.contain','Христина')
  })
  it('TC61', () => {
    cy.get('[href="/namesecret/male/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/male/ts/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/male/ts/')
    cy.get('body').should('contain','Цезарь').and('not.contain','Царина')
  })
  it('TC62', () => {
    cy.get('[href="/namesecret/male/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/male/je/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/male/je/')
    cy.get('body').should('contain','Эдгар').and('not.contain','Эмилия')
  })
  it('TC63', () => {
    cy.get('[href="/namesecret/male/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/male/ju/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/male/ju/')
    cy.get('body').should('contain','Юлиан').and('not.contain','Юлия')
  })
  it('TC64', () => {
    cy.get('[href="/namesecret/male/"]').find('.link__text').click({multiple: true })
    cy.get('[href="/namesecret/male/ja/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/male/ja/')
    cy.get('body').should('contain','Ярослав').and('not.contain','Яна')
  })
})