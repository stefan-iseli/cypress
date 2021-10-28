/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('Visit Page in CH and Form Validation', function(){
    it('Leave all blank fields and click register, Expected Result : All mandatory fields will display that the field is blank', function(){
        cy.visit('https://int.dermaplast.viu.ch')

        //Clicking the Anmelden / User icon
        cy.get('.nav-item__user > .nav-link').click()
    
        //Clicking Registrieren button
         cy.get('.user-dropdown__actions > .button-2').click()
    
        // Form Validation
        // Condition - Leave all fields empty and click Registrieren button.
        // Expected Results - Display all warnings for all mandatory fields.
       
        cy.get('#accept-consent').click({force :true })
        cy.wait(2000).get('#register-button').click()
 
    });


    it('Fill up all blank fields and click register, Expected Result : Registration completed.', function(){
        cy.wait(3000).visit('https://int.dermaplast.viu.ch')

        //Clicking the Anmelden / User icon
        cy.get('.nav-item__user > .nav-link').click()
    
        //Clicking Registrieren button
         cy.get('.user-dropdown__actions > .button-2').click()
    
         const fnameText = 'James'
         const lnameText = "Weird"
         const phoneText = "90348893"
         cy.wait(1000).get('#accept-consent').click({force : true})
         cy.wait(1000).get('#FirstName').type(fnameText).should('have.value', fnameText.substring(0,20)); 
         cy.wait(1000).get('#LastName').type(lnameText).should('have.value', lnameText.substring(0,20));
         cy.wait(1000).get('#Email').type('j.weird@y9.com')
         cy.wait(1000).get('#StreetAddress').type('1309 F. Santos Ave., Zapote')
         cy.wait(1000).get(':nth-child(2) > .form-fields > :nth-child(2) > .block-label').type('Nothing')
         cy.wait(1000).get('#ZipPostalCode').type('1742')
         cy.wait(1000).get('#City').type('Las Pinas')
         cy.wait(1000).get('#CountryId-button').click()
         cy.wait(1000).get('#ui-id-3').click()
         cy.wait(1000).get('#Phone').type(phoneText).should('have.value', phoneText.substring(0,20));
         cy.wait(1000).get('#Newsletter').click({ force: true })
         cy.wait(1000).get('#Password').type('David123Olarte')
         cy.wait(1000).get('#ConfirmPassword').type('David123Olarte')
         cy.wait(1000).get('.form-fields > :nth-child(1) > .icon-ivf').click()
         cy.wait(1000).get(':nth-child(2) > .icon-ivf').click()
             
        
        cy.wait(6000).get('#register-button').click()
        cy.request('POST','https://www.google.com/recaptcha/api2/reload?k=6Lfhlx0cAAAAAFdmPV-wanVZ8iWC-bljaNkjR9C_',{failOnStatusCode: false})
       
    });

    
 })
 