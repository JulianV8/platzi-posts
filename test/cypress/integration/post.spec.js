'use strict'

describe(('Prueba del post') => {
  before(() => {
    cy.exec('npm run test:clean')
  })
  it('Debe registrar un usuario', () => {
    cy.get('@userData').then((userData) => {
      cy.createUser(userData)
    })
  })
})
