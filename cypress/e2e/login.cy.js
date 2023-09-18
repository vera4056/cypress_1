//const { beforeEach } = require("mocha")

//const { expect } = require("chai")

describe('login page', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('logins succesfully', () => {
    cy.login('test@test.com', 'test')

    cy.contains('Добро пожаловать test@test.com').should('be.visible')
    cy.contains('Log out').should('be.visible')
  })

  it('logins eror on empty login', () => {
    cy.login(null, 'test')

    cy.get('#mail').then((el) => {
      expect(el[0].checkValidity()).to.be.false
      expect(el[0].validationMessage).to.be.eql('Заполните это поле.')
    })
  })
  it('logins eror on empty password', () => { 
    cy.login('test@test.com', null)
    
    cy.get('#pass').then((el) => {
      expect(el[0].checkValidity()).to.be.false
      expect(el[0].validationMessage).to.be.eql('Заполните это поле.')
    })
  })

describe('test', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('add new book succesfully', () => {
    cy.login('test@test.com', 'test')

   cy.contains('Добро пожаловать test@test.com').should('be.visible')
   cy.contains('Log out').should('be.visible')
    
   cy.contains('Add new').click()
   cy.contains('Book description').should('be.visible')
    
   cy.get('#title').type('Белый клык')
   cy.get('#description').type('Приключенческая повесть')
    
   cy.get('#fileCover').selectFile('cypress/fixtures/cover.jpg')
   cy.get('#fileBook').selectFile('cypress/fixtures/book.jpg')

   cy.get('#authors').type('Джек Лондон')
   cy.get('#favorite').click()
   
   cy.contains('Submit').click()
   })
})

it('delete from fav book succesfully', () => {
   cy.login('test@test.com', 'test')

   cy.contains('Добро пожаловать test@test.com').should('be.visible')
   cy.contains('Log out').should('be.visible')
  
   cy.contains('Add new').click()
   cy.contains('Book description').should('be.visible')
  
   cy.get('#title').type('Белый клык')
   cy.get('#description').type('Приключенческая повесть')
  
   cy.get('#authors').type('Джек Лондон')
   cy.get('#favorite').click()
 
   cy.contains('Submit').click()

   cy.contains('Delete from favorite').click()

 })

it('add new book error on empty title', () => {
  cy.login('test@test.com', 'test')

  cy.contains('Добро пожаловать test@test.com').should('be.visible')
  cy.contains('Log out').should('be.visible')
  
  cy.contains('Add new').click()
  cy.contains('Book description').should('be.visible')
  
  cy.get('#title').then((el) => {
  expect(el[0].checkValidity()).to.be.false
  expect(el[0].validationMessage).to.be.eql('Заполните это поле.')
  })
})

})
