describe("logout a user", () => {

    it('logout admin', () => {  
        // home
        cy.visit('/');
        cy.url().should('include', '/')

        cy.scrollTo('bottom')

        // sign in page
        cy.visit('/signup')
        cy.url().should('include', '/signup')

        // type data
        cy.findByPlaceholderText(/Enter your first name/i).type("Chalindu", { delay: 10 })
        cy.contains("First Name")
        cy.scrollTo('top')

        cy.findByPlaceholderText(/Enter your last name/i).type("Kodikara", { delay: 10 })
        cy.contains("Last Name")
        cy.scrollTo('top')

        cy.findByPlaceholderText(/Enter your phone number/i).type("0715956909", { delay: 10 })
        cy.contains("Phone Number")
        cy.scrollTo('top')

        cy.findByPlaceholderText(/Enter your email/i).type("chali5@gmail.com", { delay: 10 })
        cy.contains("Email")
        cy.scrollTo('top')

        cy.findByPlaceholderText(/Enter your password/i).type("Password", { delay: 10 })
        cy.contains("Password")
        cy.scrollTo('top')

        cy.findByPlaceholderText(/Confirm your password/i).type("Password", { delay: 10 })
        cy.contains("Confirm Password")
        cy.scrollTo('top')

        cy.findByRole('heading', {  name: /register to get service through an intelligent chatbot!!!create your account by filling out the information below\./i})
        cy.findByText(/already have an account\? login/i)
        cy.findByRole('button', {  name: /continue/i}).click()

        cy.findByRole('heading', {  name: /you have successfully registered!now log in sign in/i})
        cy.findByRole('button', {  name: /sign in/i}).click()
    })
})