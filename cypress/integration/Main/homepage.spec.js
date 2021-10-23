describe("home page", () => {

    it('home page is redirected correctly', () => {
        // home
        cy.visit('/');
        cy.url().should('include', '/')

        cy.scrollTo('bottom')
        cy.scrollTo('top')
        cy.contains("light, fast & powerful", { matchCase: false })
        cy.contains("ease of use for everyone", { matchCase: false })
        cy.contains("sign up to chat with xyron chatbot", { matchCase: false })

         // check whether we can redirect by typing url
        cy.visit('/telecommucation');

        // check dark mode
    })

    it('check dark mode', () => {
        cy.findByRole('button', {  name: /call segun/i}).click()
        cy.scrollTo('top')
        cy.scrollTo('top')

    })
})