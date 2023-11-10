describe('Login Home Page', () => {
     
beforeEach(()=>{
  cy.intercept('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index').as('Login Page')
  cy.visit('https://opensource-demo.orangehrmlive.com/')
})

/*
    it('Valid Login', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/')
  cy.get('[placeholder="Username"]').type('Admin')
  cy.get('[placeholder="Password"]').type('admin123')
  cy.get('button').click()
    })
    
 */

    it('Valid Login', () => {
       cy.get('[placeholder="Username"]').type('Admin')
      cy.get('[placeholder="Password"]').type('admin123')
      cy.get('button').click()
        })
        



    it('Valid Login', () => {
      cy.get('[placeholder="Username"]').type('Admin')
      cy.get('[placeholder="Password"]').type('admin123')
      cy.get('button').click()
       
    })




})