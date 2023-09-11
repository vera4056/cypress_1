//const { beforeEach } = require("mocha")

const { expect } = require("chai")

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

 })

