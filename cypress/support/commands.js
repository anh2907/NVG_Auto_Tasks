// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import { Login } from '../shared/login'
import { SearchConditions } from '../shared/resultPage'
Cypress.Commands.add("login",(email,password) => {
    //Open the url
    cy.visit(Login.TestUrl)
          .title()
          .should('not.be.null')
          .url().should('include','amazon.com' )
    //Click Sign in link        
    cy.xpath(Login.SignInLink).click()
    //Enter email address
    cy.xpath(Login.EmailInput).type(email)
    //Click Continue button
    cy.xpath(Login.ContinueButton).click()
    //Verify value for the input email address
    cy.xpath(Login.LoginMail).should('contain', email)
    //Enter password
    cy.xpath(Login.PasswordInput).type(password)
    //Click Sign in button
    cy.xpath(Login.SignInButton).click()
    //Verify the text displayed for Authentication require
    //cy.xpath(Login.AuthenRequiredText).should('contain', 'Authentication required')
    //Click Continue button
    //cy.xpath(Login.ContinueButton).click()
    cy.wait(50000)//Wait 50 seconds for manually entering
    /*Please manually enter below fields if required
        - Characters from Anti-Automation Challenge
        - OPT
        - Click OTP submit button*/
    //Verify message if login successfully   
    cy.xpath(Login.LoginSuccessMsg).should('contain', 'Hello, Anh')      
})
//Perform a search with (Department: Books/Keyword: apple/Book Language: English)
Cypress.Commands.add("performSearch",(department, keyword)=>{
    //Select Book Department
    cy.xpath(SearchConditions.SearchDropdownBox).select(department, {force:true})
    //Verify Book department selected
    cy.xpath(SearchConditions.BooksElement).should(($item)=>{
        expect($item).to.have.prop('selected',true)
    })
    //Input search key = apple
    cy.xpath(SearchConditions.SearchInput).type(keyword)
    //Verify the SearchKeyword entered correctly
    cy.xpath(SearchConditions.SearchInput).should('have.value',keyword)
    //Click Search icon
    cy.xpath(SearchConditions.SearchIcon).click()
    //Select Book Language: English
    cy.xpath(SearchConditions.SearchBookLanguage).check({force:true})
    //Verify check box English checked
    cy.xpath(SearchConditions.SearchBookLanguage).should(($item)=>{
        expect($item).to.have.attr('checked')
    })
    
})