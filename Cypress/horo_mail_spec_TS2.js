describe('Name secret TS2', () => {
  beforeEach(() => {
    cy.visit('https://horo.mail.ru/namesecret/')
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })  
  })
  
  it('TC10', () => {
    cy.get('[data-module="CustomSelect"]').click()
    cy.get('[data-optidx="0"]').click()
    cy.get('.button__text').click()
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/')
  })
  it('TC11', () => {
    cy.get('[data-module="CustomSelect"]').click()
    cy.get('[data-optidx="1"]').click()
    cy.get('.button__text').click()
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/male/')
  })
  it('TC12', () => {
    cy.get('[data-module="CustomSelect"]').click()
    cy.get('[data-optidx="2"]').click()
    cy.get('.button__text').click()
    cy.url().should('eq', 'https://horo.mail.ru/namesecret/female/')
  })
  it('TC13 and TC14', () => {
    cy.get('.input__container').type('Василий')
    cy.get('[data-module="CustomSelect"]').click()
    cy.get('[data-optidx="2"]').click()
    cy.get('.button__text').click()
    cy.get('body').should('contain','К сожалению, по Вашему запросу ничего не найдено')
    cy.go('back')
    cy.get('.input__container').type('Мария')
    cy.get('[data-module="CustomSelect"]').click()
    cy.get('[data-optidx="1"]').click()
    cy.get('.button__text').click()
    cy.get('body').should('contain','К сожалению, по Вашему запросу ничего не найдено')
  })
})