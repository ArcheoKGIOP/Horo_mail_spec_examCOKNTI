describe('Name secret TS1', () => {
  beforeEach(() => {
    cy.visit('https://horo.mail.ru/namesecret/')
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })  
  })
  
  it('TC1 and TC2', () => {
    cy.get('.input__container').type('василий')
    .type ('{enter}');
    cy.get('body').should('contain','Василий')
    cy.go('back')
    cy.get('.input__container').type('василий')
    cy.get('.button__text')
    .click();
    cy.get('body').should('contain','Василий')   
  })
  it('TC3', () => {
    cy.get('.input__container').type('Табуретка')
    .type ('{enter}')

    cy.get('body')
    .should('contain','К сожалению, по Вашему запросу ничего не найдено')
    cy.go('back', { delay: 100 })
    
  })
  it('TC 8', () => {
    cy.get('.input__container').type('ВаSiлий')
    .type ('{enter}')
    cy.get('body')
    .should('contain','Введено неверное значение')
    cy.go('back', { delay: 100 })
  })
  it('TC 5', () => {
    cy.get('.input__container').type('455652765')
    .type ('{enter}')
    cy.get('body')
    .should('contain','Введите текст для поиска')
    cy.go('back', { delay: 100 })
  })
  it('TC 4', () => {
    cy.get('.input__container').type('~@$%^&*()')
    .type ('{enter}')
    cy.get('body')
    .should('contain','Введите текст для поиска')
    cy.go('back', { delay: 100 })
  })
  it('TC 7', () => {
    cy.get('.input__container').type('     ')
    .type ('{enter}')
    cy.get('body')
    .should('contain','Введите текст для поиска')
    cy.go('back', { delay: 100 })
  })
  it('TC 8', () => {
    cy.get('.input__container').type('0')
    .type ('{enter}')
    cy.get('body')
    .should('contain','Введите текст для поиска')
    cy.go('back')
  })
})