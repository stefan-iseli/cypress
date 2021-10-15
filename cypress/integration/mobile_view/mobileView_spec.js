/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

const sizes = ['ipad-2', [1024, 768]]

describe('Open Page in different viewport', () => {
  sizes.forEach((size) => {
    // make assertions on the logo using
    // an array of different viewports
    it(`Should display the page on ${size} screen`, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
      } else {
        cy.viewport(size)
      }

  
      cy.visit('https://int.dermaplast.viu.ch')

      //Clicking the Anmelden / User icon
      cy.get('.nav-item__user > .nav-link').click()
  
      //Clicking Registrieren button
       cy.get('.user-dropdown__actions > .button-2').click()
  
      // Form Validation
      // Condition - Leave all fields empty and click Registrieren button.
      // Expected Results - Display all warnings for all mandatory fields.
      const fnameText = 'David'
      const lnameText = "Olarte"
      const phoneText = "09081744538"
      cy.get('#FirstName').type(fnameText).should('have.value', fnameText.substring(0,20)); 
      cy.get('#LastName').type(lnameText).should('have.value', lnameText.substring(0,20));
      cy.get('#Email').type('david.r.olarte@gmail.com')
      cy.get('#StreetAddress').type('1309 F. Santos Ave., Zapote')
      cy.get(':nth-child(2) > .form-fields > :nth-child(2) > .block-label').type('Nothing')
      cy.get('#ZipPostalCode').type('1742')
      cy.get('#City').type('Las Pinas')
      cy.get('#CountryId-button').click()
      cy.get('#ui-id-3').click()
      cy.get('#Phone').type(phoneText).should('have.value', phoneText.substring(0,20));
      cy.get('#Newsletter').click({ force: true })
      cy.get('#Password').type('David123Olarte')
      cy.get('#ConfirmPassword').type('David123Olarte')
      cy.get('.form-fields > :nth-child(1) > .icon-ivf').click()
      cy.get(':nth-child(2) > .icon-ivf').click()
      cy.get('#accept-consent').click({force :true })
      
      cy.get('#register-button').click()
  
      //Expected Result
     // cy.log('Excpeted Result :  Display all warnings for all mandatory fields.')
     cy.log('Expected Result :  You are now registered!')
     

    })
  })
})




 