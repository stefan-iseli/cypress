/// <reference types="cypress" />

describe('dmf example app', () => {
  beforeEach(() => {
    cy.visit('https://int.dermaplast.viu.ch/de')
  })

  it('displays three subnavigations in Anwendung', () => {
    cy.contains('Anwendung').click()
  })
  
})
