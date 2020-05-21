export const SearchConditions = {
    SearchDropdownBox: './/select[@id=\'searchDropdownBox\']',
    SearchInput: './/input[@id=\'twotabsearchtextbox\']',
    BooksElement: './/option[contains(text(),\'Books\')]',
    BooksDepartment: 'Books',
    SearchKeyword: 'apple',
    SearchIcon: './/input[@type=\'submit\' and @class=\'nav-input\']',
    SearchBookLanguage: './/span[contains(text(),\'English\')]/preceding-sibling::div/label/input',
}
export const SearchResultList = {
    ResultList: './/div[@data-asin!=\'\' and @data-index]',
    NextButton: './/li[@class=\'a-last\']',
    SortList: './/select[@id=\'s-result-sort-select\']',
    SelectedSortItem: './/select[@id=\'s-result-sort-select\']//option[@selected]',
}
export const SortOption = {
    PriceLowtoHigh: 'Price: Low to High',
    PriceHightoLow: 'Price: High to Low',
    AvgCustomerReview: 'Avg. Customer Review'
}
