

describe("normal user login", () => {

    it('user login to the application', () => {
        // home
        cy.visit('/');
        cy.url().should('include', '/')

        cy.scrollTo('bottom')

        // sign in page
        cy.visit('/signin')
        cy.url().should('include', '/signin')

        // type data
        cy.findByPlaceholderText(/Enter your email/i).type("chalindu.18@cse.mrt.ac.lk", { delay: 10 })
        cy.contains("Email")
        cy.scrollTo('top')
        cy.contains("password", { matchCase: false })
        cy.findByPlaceholderText(/Enter your email/i).should('have.value', 'chalindu.18@cse.mrt.ac.lk')
        cy.scrollTo('top')


        cy.findByPlaceholderText(/enter your password/i).type("Password", { delay: 10 })
        cy.findByPlaceholderText(/enter your password/i).should('have.value', 'Password')
        cy.scrollTo('top')

        cy.findByRole('button', {
            name: /continue/i
          }).click();
        cy.scrollTo('top')
    })

    it('check dashboard', () => {
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
        cy.visit('/')

        cy.findByRole('link', {
            name: /healthcare do you want to channel a doctor\? chat now/i
          }).click()
        cy.visit('/')

        cy.findByRole('link', {
            name: /public transport view today train and bus schedules\. chat now/i
          }).click()
        cy.visit('/')

        cy.findByRole('link', {
            name: /dashboard personalize your settings using your dashboard\. chat now/i
          }).click()
    })

    // it('go to chatbot in domain page', () => {

    //     cy.visit('/telecommunication');
    //     cy.scrollTo('bottom')
    //     cy.contains("ask from xyron").click()

    // })
})