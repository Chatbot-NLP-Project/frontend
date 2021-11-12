describe("transport chatbot", () => {

    it('check complaint function', () => {
        cy.visit('/signin')
        cy.findByPlaceholderText(/Enter your email/i).type("chalindu.18@cse.mrt.ac.lk")
        cy.findByPlaceholderText(/enter your password/i).type("Password")
        cy.findByRole('button', {
            name: /continue/i
          }).click();
        cy.scrollTo('top')
        cy.scrollTo('top')

        cy.findByRole('link', {
            name: /public transport view today train and bus schedules\? chat now/i
          }).click()

        cy.findByRole('button', {  name: /ask from xyron/i}).click()
        
        cy.findByRole('textbox').type("hi", {delay:100}).type('{enter}')
        cy.findByRole('textbox').type("the bus is moving too slow", {delay:100}).type('{enter}')
        cy.findByText(/do you want to maake a complaint/i, {delay:100}).should('be.visible')
        cy.findByRole('heading', {  name: /xyron transport chatbot/i}).should('be.visible')
    })

    it('check travel options function', () => {
        cy.visit('/signin')
        cy.findByPlaceholderText(/Enter your email/i).type("chalindu.18@cse.mrt.ac.lk")
        cy.findByPlaceholderText(/enter your password/i).type("Password")
        cy.findByRole('button', {
            name: /continue/i
          }).click();
        cy.scrollTo('top')
        cy.scrollTo('top')

        cy.findByRole('link', {
            name: /public transport view today train and bus schedules\? chat now/i
          }).click()

        cy.findByRole('button', {  name: /ask from xyron/i}).click()
        
        cy.findByRole('textbox').type("hi", {delay:100}).type('{enter}')
        cy.findByRole('textbox').type("how to get to hikkaduwa", {delay:100}).type('{enter}')
        cy.findByText(/What's your preferred method? bus or train?/i, {delay:100}).should('be.visible')
        cy.findByRole('heading', {  name: /xyron transport chatbot/i}).should('be.visible')
    })
})