describe("logout a user", () => {

    it('logout admin', () => {  
        cy.visit('/signin')
        cy.findByPlaceholderText(/Enter your email/i).type("admin@gmail.com")
        cy.findByPlaceholderText(/enter your password/i).type("Password")
        cy.findByRole('button', {
            name: /continue/i
        }).click();
        cy.findByRole('button', {  name: /log out/i}).click()
    })

    it('logout normal user', () => {  
        cy.visit('/signin')
        cy.findByPlaceholderText(/Enter your email/i).type("chalindu.18@cse.mrt.ac.lk")
        cy.findByPlaceholderText(/enter your password/i).type("Password")
        cy.findByRole('button', {
            name: /continue/i
        }).click();
        cy.findByRole('button', {  name: /log out/i}).click()
    })
})