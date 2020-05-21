import { Login, ValidLoginData } from '../../shared/login'
import { InvalidLogin } from '../../shared/login'
import { InvalidEmailData } from '../../shared/login'
import { InvalidPasswordData } from '../../shared/login'
describe ('Verify functionality of login with invalid account', ()=>{
    before (()=>{
        //Open the url
        cy.visit(Login.TestUrl)
          .title()
          .should('not.be.null')
          .url().should('include', 'amazon.com')
    })
    //Verify Login with invalid Email address
    it('Verify Login with invalid Email address',()=>{
        //Click Sign in link 
        cy.xpath(Login.SignInLink).click()
        //Login with 3 invalid emails as in test data
        for (let i =1; i<4; i++)
        {
            //Clear value in Email text box
            cy.xpath(Login.EmailInput).clear()
            //Enter invalid email addresses in the test data
            cy.xpath(Login.EmailInput).type(InvalidEmailData[i])
            //Verify value entered 
            cy.xpath(Login.EmailInput).should('have.value', InvalidEmailData[i] )
            //Click Continue button
            cy.xpath(Login.ContinueButton).click()
            //Verify the error message displayed when input invalid emaild address
            cy.xpath(InvalidLogin.InvalidEmailMsg).should('contain', 'We cannot find an account with that email address')
        }
    }) 
    //Verify Login with blank email address  
    it('Verify Login with blank email address',()=>{
        //Clear value in Email text box
        cy.xpath(Login.EmailInput).clear()
        //Click Continue button
        cy.xpath(Login.ContinueButton).click()
        //Verify the error message displayed when not input value for emaild address
        cy.xpath(InvalidLogin.BlankEmailMsg).should('contain', 'Enter your email or mobile phone number')
    })
    //Verify Login with invalid password
    it ('Verify Login with invalid password',()=>{
        //Clear value in Email text box
        cy.xpath(Login.EmailInput).clear()
        //Enter valid email addresses
        cy.xpath(Login.EmailInput).type(ValidLoginData.EmailAddress)
        //Click Continue button
        cy.xpath(Login.ContinueButton).click()
        /*Bypass the error "Please Enable Cookies to Continue" by clicking "Back to previous page" button
        and click on Continue button to run next scripts*/
        cy.wait(3000)
        //Click "Back to previous page" button
        cy.xpath(InvalidLogin.GoBackToPreviousPageButton).click()
        //Click Continue button
        cy.xpath(Login.ContinueButton).click()
        //Login with 3 invalid passwords as in test data       
        for (let i=1; i<4; i++)
        {
            //Clear value in Password text box
            cy.xpath(Login.PasswordInput).clear()
            //Enter invalid password in the test data
            cy.xpath(Login.PasswordInput).type(InvalidPasswordData[i])
            //Verify the value entered 
            cy.xpath(Login.PasswordInput).should('have.value',InvalidPasswordData[i])
            //Click Sign in button
            cy.xpath(Login.SignInButton).click()
            //Verify the error message displayed when input invalid value for password
            cy.xpath(InvalidLogin.InvalidPasswordMsg).should('contain','Your password is incorrect')
        }
    })          
})