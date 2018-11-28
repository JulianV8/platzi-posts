'use strict'

describe(('Prueba del login') => {
  before(() => {
    cy.exec('npm run test:clean')
  })
  beforeEach(() => {
    cy.fixture('user.json').as('userData')
    cy.visit('/login')
    cy.contains('h1', 'Bienvenido').should('be.visible')
  })

  it('Debe registrar un usuario', () => {
    cy.get('@userData').then((userData) => {
      cy.createUser(userData)
    })
  })
  it('Debe fallar el logueo usuario erroneo', () => {
    cy.userLogin('fail@algo.com', '123456')
    cy.get('.error-msg').should('be.visible')
  })
  it('Debe loguear el usuario', () => {
    cy.get('@userData').then((userData) => {
      cy.userLogin(userData.email, userData.password)
      cy.contains('a', 'Dashboard').should('be.visible')
    })
  })
})
