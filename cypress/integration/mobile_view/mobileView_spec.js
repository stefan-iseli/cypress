/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

const sizes = ['ipad-2', [1024, 768], [428,926], [414, 895], [390,844], [414,896],[375,812], [414,736], [375,667],
[414,736],[320,568], [375,667],[414,736],[375,667],[414,736],[375,812], [768,1024], [1024,1366],[412,732],[412,847],[412,824],
[412,732],[360,740], [480,853],[360,740], [360,640],[768,1024], [600,960],[800,1280],[1280,850]]

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
      const uuid = () => Cypress._.random(0, 1e6)
      const id = uuid()
      const emailText = `tester${id}@gmail.com`
      const fnameText = 'David'
      const lnameText = "Olarte"
      const phoneText = "09081744538"
      const addressText = "1309 F. Santos Avenue, Zapote"
      const postalText = "1742"
      

      cy.get('#FirstName').type(fnameText).should('have.value', fnameText.substring(0,20)); 
      cy.get('#LastName').type(lnameText).should('have.value', lnameText.substring(0,20));
      cy.get('#Email').type((emailText), {force : true}).should('have.value', emailText)
      cy.get('#StreetAddress').type((addressText), {force : true}).should('have.value', addressText)
      cy.get(':nth-child(2) > .form-fields > :nth-child(2) > .block-label').type('Nothing')
      cy.get('#ZipPostalCode').type('1742', {force : true})
      cy.get('#City').type('Las Pinas', {force : true})
      cy.get('#CountryId-button').click( {force : true})
      cy.get('#ui-id-3').click({force : true})
      cy.get('#Phone').type(phoneText, {force : true}).should('have.value', phoneText.substring(0,20));
      cy.get('#Newsletter').click({ force: true })
      cy.get('#Password').type('David123Olarte', {force : true})
      cy.get('#ConfirmPassword').type('David123Olarte', {force : true})
      cy.get('.form-fields > :nth-child(1) > .icon-ivf').click( {force : true})
      cy.get(':nth-child(2) > .icon-ivf').click( {force : true})
      cy.get('#accept-consent').click({force :true })
      
        
      cy.wait(6000).get('#register-button').click()
      cy.request('POST','https://www.google.com/recaptcha/api2/reload?k=6Lfhlx0cAAAAAFdmPV-wanVZ8iWC-bljaNkjR9C_',{failOnStatusCode: false})
       
      //Expected Result
     // cy.log('Excpeted Result :  Display all warnings for all mandatory fields.')
     cy.clearCookies()


    })
  })
})




 