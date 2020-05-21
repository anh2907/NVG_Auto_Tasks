import { Login, ValidLoginData } from '../../shared/login'
describe('Verify Login to Amazon with valid account', ()=>{
    it('Login', ()=>{
        cy.visit(Login.TestUrl)
          .title()
          .should('not.be.null')
          .url().should('include','amazon.com' )
    //Click Sign in link      
    cy.xpath(Login.SignInLink).click()
    //Enter email address
    cy.xpath(Login.EmailInput).type(ValidLoginData.EmailAddress)
    //Click Continue button
    cy.xpath(Login.ContinueButton).click()
    //Verify value for the input email address
    cy.xpath(Login.LoginMail).should('contain', ValidLoginData.EmailAddress)
    //Enter password
    cy.xpath(Login.PasswordInput).type(ValidLoginData.Password)
    //Click Sign in button
    cy.xpath(Login.SignInButton).click()
    //Verify the text displayed for Authentication require
    //cy.xpath(Login.AuthenRequiredText).should('contain', 'Authentication required')
    //Click Continue button
    //cy.xpath(Login.ContinueButton).click()
    cy.wait(50000)//Wait 50 seconds for manual entering
    /*Please manuall enter below fields if required
        - Chracters from Anti-Automation Challenge
        - OPT
        - Click OTP submit button*/
    //Verify message displayed if login successfully   
    cy.xpath(Login.LoginSuccessMsg).should('contain', 'Hello, Anh')    
    })
})