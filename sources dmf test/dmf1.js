/// <reference types="cypress" />

describe('dmf example app', () => {
  beforeEach(() => {
    cy.visit('https://int.dermaplast.viu.ch/de')
  })

  it('displays three subnavigations in Anwendung', () => {
    cy.get('Anwendung').should('have.length', 3)
    cy.get('Anwendung').first().should('have.text', 'Prävention')
    cy.get('Anwendung').eq(2).should('have.text', 'Behandlung')
    cy.get('Anwendung').last().should('have.text', 'Regeneration')
  })

})
