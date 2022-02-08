describe('Name secret TS3', () => {
  beforeEach(() => {
    cy.visit('https://horo.mail.ru/namesecret/')
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })  
  })
  
  it('TC15', () => {
    cy.get('[href="/namesecret/a/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/a/')
    cy.get('body').should('contain','Анастасия').and('contain','Анатолий')
  })
  it('TC16', () => {
    cy.get('[href="/namesecret/b/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/b/')
    cy.get('body').should('contain','Бахман').and('contain','Барбара')
  })
  it('TC17', () => {
    cy.get('[href="/namesecret/v/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/v/')
    cy.get('body').should('contain','Вениамин').and('contain','Вера')
  })
  it('TC18', () => {
    cy.get('[href="/namesecret/g/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/g/')
    cy.get('body').should('contain','Гений').and('contain','Гюзель')
  })
  it('TC19', () => {
    cy.get('[href="/namesecret/d/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/d/')
    cy.get('body').should('contain','Дарина').and('contain','Даниил')
  })
  it('TC20', () => {
    cy.get('[href="/namesecret/e/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/e/')
    cy.get('body').should('contain','Екатерина').and('contain','Евангел')
  })
  it('TC21', () => {
    cy.get('[href="/namesecret/zh/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/zh/')
    cy.get('body').should('contain','Ждан').and('contain','Жанна')
  })
  it('TC22', () => {
    cy.get('[href="/namesecret/z/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/z/')
    cy.get('body').should('contain','Зиновий').and('contain','Зинаида')
  })
  it('TC22', () => {
    cy.get('[href="/namesecret/i/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/i/')
    cy.get('body').should('contain','Игнатий').and('contain','Инга')
  })
  it('TC24', () => {
    cy.get('[href="/namesecret/k/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/k/')
    cy.get('body').should('contain','Капитон').and('contain','Каролина')
  })
  it('TC25', () => {
    cy.get('[href="/namesecret/l/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/l/')
    cy.get('body').should('contain','Лукьян').and('contain','Людмила')
  })
  it('TC26', () => {
    cy.get('[href="/namesecret/m/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/m/')
    cy.get('body').should('contain','Михаил').and('contain','Мария')
  })
  it('TC27', () => {
    cy.get('[href="/namesecret/n/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/n/')
    cy.get('body').should('contain','Наум').and('contain','Нелли')
  })
  it('TC28', () => {
    cy.get('[href="/namesecret/o/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/o/')
    cy.get('body').should('contain','Олег').and('contain','Ольга')
  })
  it('TC29', () => {
    cy.get('[href="/namesecret/p/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/p/')
    cy.get('body').should('contain','Петр').and('contain','Полина')
  })
  it('TC30', () => {
    cy.get('[href="/namesecret/r/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/r/')
    cy.get('body').should('contain','Роман').and('contain','Римма')
  })
  it('TC31', () => {
    cy.get('[href="/namesecret/s/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/s/')
    cy.get('body').should('contain','Симеон').and('contain','Сабина')
  })
  it('TC32', () => {
    cy.get('[href="/namesecret/t/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/t/')
    cy.get('body').should('contain','Тимофей').and('contain','Таисия')
  })
  it('TC33', () => {
    cy.get('[href="/namesecret/u/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/u/')
    cy.get('body').should('contain','Умар').and('contain','Ульяна')
  })
  it('TC34', () => {
    cy.get('[href="/namesecret/f/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/f/')
    cy.get('body').should('contain','Федор').and('contain','Фатима')
  })
  it('TC35', () => {
    cy.get('[href="/namesecret/h/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/h/')
    cy.get('body').should('contain','Христофор').and('contain','Христина')
  })
  it('TC36', () => {
    cy.get('[href="/namesecret/ts/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/ts/')
    cy.get('body').should('contain','Цезарь').and('contain','Царина')
  })
  it('TC37', () => {
    cy.get('[href="/namesecret/je/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/je/')
    cy.get('body').should('contain','Эдгар').and('contain','Эмилия')
  })
  it('TC38', () => {
    cy.get('[href="/namesecret/ju/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/ju/')
    cy.get('body').should('contain','Юлиан').and('contain','Юлия')
  })
  it('TC39', () => {
    cy.get('[href="/namesecret/ja/"]').find('.filter__text').click({multiple: true })
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/ja/')
    cy.get('body').should('contain','Ярослав').and('contain','Яна')
  })
})