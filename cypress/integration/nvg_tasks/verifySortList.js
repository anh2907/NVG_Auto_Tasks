import { ValidLoginData } from '../../shared/login'
import { SearchConditions } from '../../shared/resultPage'
import { SearchResultList } from '../../shared/resultPage'
import { SortOption } from '../../shared/resultPage'
//Verify result list can be sorted on demand
describe('Verify result list can be sorted on demand', ()=>{
    before(()=>{
        //Login with valid account
        cy.login(ValidLoginData.EmailAddress,ValidLoginData.Password)
    })
    //Verify the Result is sorted by Price from Low to High
    it ('Verify the Result is sorted by Price from Low to High', ()=>{
        //Perform a search with (Department: Books/Keyword: apple/Book Language: English)
        cy.performSearch(SearchConditions.BooksDepartment,SearchConditions.SearchKeyword)
        //Change sort option to Price: Low to High
        cy.xpath(SearchResultList.SortList).select(SortOption.PriceLowtoHigh,{force:true})
        //Verify the Result is sorted by Price from Low to High
        cy.xpath(SearchResultList.SelectedSortItem).should(($item)=>{
            expect($item).to.contain(SortOption.PriceLowtoHigh)
        })
    })
})