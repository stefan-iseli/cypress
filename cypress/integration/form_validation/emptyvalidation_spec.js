/// <reference types="cypress" />

describe('Visit Page in CH and Form Validation', function(){
   it('Open Page in CH', function(){
    //Visit Page in CH
    cy.visit('https://int.dermaplast.viu.ch')

    //Clicking the Anmelden / User icon
    cy.wait(5000).get('.nav-item__user > .nav-link').click()

    //Clicking Registrieren button
     cy.wait(2000).get('.user-dropdown__actions > .button-2').click()

    // Form Validation
    // Condition - Leave all fields empty and click Registrieren button.
    // Expected Results - Display all warnings for all mandatory fields.
    cy.wait(2000).get('#register-button').click()

    //Expected Result
    cy.log('Excpeted Result :  Display all warnings for all mandatory fields.')

   });

})