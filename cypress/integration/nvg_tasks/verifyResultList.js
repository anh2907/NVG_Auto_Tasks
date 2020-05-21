import { ValidLoginData } from '../../shared/login'
import { SearchConditions } from '../../shared/resultPage'
import { SearchResultList } from '../../shared/resultPage'
//Verify paging on result list
describe('Verify paging on result list', ()=>{
    before(()=>{
        //Login with valid account
        cy.login(ValidLoginData.EmailAddress,ValidLoginData.Password)   
    })
    //Verify result list is paginated if there are more than 16 items
    it ('Verify result list is paginated if there are more than 16 items', ()=>{
        //Perform a search with (Department: Books/Keyword: apple/Book Language: English)
        cy.performSearch(SearchConditions.BooksDepartment,SearchConditions.SearchKeyword)
        //Verify the result displays exactly 16 items on each page
        cy.xpath(SearchResultList.ResultList).should(($list)=>{
            expect($list).to.have.length(16)
        })
        //Click Next button to verify there are 16 items on page 2
        cy.xpath(SearchResultList.NextButton).should('have.attr','class','a-last').then(()=>{
            //Click Next button
            cy.xpath(SearchResultList.NextButton).click()
            //Verify there are 16 items on page 2
            cy.xpath(SearchResultList.ResultList).should(($list)=>{
                expect($list).to.have.length(16)
            })   
        })
    })
})