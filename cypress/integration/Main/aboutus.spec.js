describe("about us page", () => {

    it('about us page rendered', () => {
        // about us page
        cy.visit('/aboutus');
        cy.url().should('include', '/aboutus')

        cy.scrollTo('top')
        cy.contains("A Social Inquiry Chatbot", { matchCase: false })
    })
})