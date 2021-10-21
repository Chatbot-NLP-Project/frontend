
describe("Admin User", () => {

    it('check admin functions', () => {  
        cy.visit('/signin')
        cy.findByPlaceholderText(/Enter your email/i).type("admin@gmail.com")
        cy.findByPlaceholderText(/enter your password/i).type("Password")
        cy.findByRole('button', {
            name: /continue/i
        }).click();
        cy.scrollTo('top')
        cy.contains("your name", { matchCase: false })
        cy.setCookie('feedbacks', '[]')
        cy.findByRole('button', {  name: /overview/i}).click()


        cy.findByRole('button', {  name: /ratings/i}).click()
    })
})






