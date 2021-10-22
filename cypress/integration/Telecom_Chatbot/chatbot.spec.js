describe("telecom chatbot", () => {

    it('check chatbot functions', () => {
        cy.visit('/signin')
        cy.findByPlaceholderText(/Enter your email/i).type("chalindu.18@cse.mrt.ac.lk")
        cy.findByPlaceholderText(/enter your password/i).type("Password")
        cy.findByRole('button', {
            name: /continue/i
          }).click();
        cy.scrollTo('top')
        cy.scrollTo('top')

        cy.findByRole('link', {
            name: /telecommuncation do you want to view and buy a data package\? chat now/i
          }).click()

        cy.findByRole('button', {  name: /ask from xyron/i}).click()
        
        cy.findByRole('textbox').type("hi", {delay:100}).type('{enter}')
        cy.findByRole('textbox').type("what is your name", {delay:100}).type('{enter}')

        cy.findByText(/data packages/i, {delay:100}).click()
        // cy.get('h1').contains('Select Internet Service Provider')
        cy.findByRole('heading', {  name: /xyron telecommunication chatbot/i}).should('be.visible')
        // cy.findByText(/view activated packages/i, {delay:100}).first().click()
        cy.findByText(/current balance/i, {delay:100}).click()
        // cy.findByText(/view crypto price/i, {delay:100}).click()
        cy.findByText(/view crypto price in LKR/i, {delay:100}).click()
        cy.findByText(/1 usdt = lkr?/i, {delay:100}).click()
        cy.findByText(/view currency values/i, {delay:100}).click()

    })
})