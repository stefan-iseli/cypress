/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

const sizes = ['ipad-2', [1024, 768], [428,926], [414, 895], [390,844], [414,896],[375,812], [414,736], [375,667],
[414,736],[320,568], [375,667],[414,736],[375,667],[414,736],[375,812], [768,1024], [1024,1366],[412,732],[412,847],[412,824],
[412,732],[360,740], [480,853],[360,740], [360,640],[768,1024], [600,960],[800,1280],[1280,850]]



describe('Signin in different browser', () => {
 
    // make assertions on the logo using
    // an array of different viewports
    it(`Initiating sign in and sign out`, () => {

  
      cy.visit('https://int.dermaplast.viu.ch')

      //Clicking the Anmelden / User icon
      cy.get('.nav-item__user > .nav-link').click()
  
      cy.get('.user-dropdown__actions > .button-1').click()
      cy.wait(6000)
      cy.wait(1000).get('#Email').type('tester137849@gmail.com')
      cy.wait(1000).get('#Password').type('David123Olarte')

      cy.get('form > .buttons > .button-2').click()

      cy.wait(1000).get('.nav-item__user > .nav-link').click()
      cy.wait(3000).get('.user-dropdown__actions > .button-1').click()
      cy.wait(1000).reload()
    })

})



describe('Signin in different viewport', () => {
  sizes.forEach((size) => {
    // make assertions on the logo using
    // an array of different viewports
    it(`Should display the page on ${size} screen and will automate login`, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
      } else {
        cy.viewport(size)
      }

  
      cy.visit('https://int.dermaplast.viu.ch')

      //Clicking the Anmelden / User icon
      cy.get('.nav-item__user > .nav-link').click()
  
      cy.get('.user-dropdown__actions > .button-1').click()
      cy.wait(6000)
      cy.wait(1000).get('#Email').type('tester137849@gmail.com')
      cy.wait(1000).get('#Password').type('David123Olarte')

      cy.get('form > .buttons > .button-2').click()

      cy.wait(1000).get('.nav-item__user > .nav-link').click()
      cy.wait(3000).get('.user-dropdown__actions > .button-1').click()
      cy.wait(1000).reload()
    })
  })
})




 