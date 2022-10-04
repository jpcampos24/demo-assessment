export class SearchItem{

    //search an item in the searchbox
    searchItem(itemToSearch){
        cy.xpath('//div[@class="nav-search-field "]', {timeout: 50000}).type(itemToSearch+'{enter}')
    }
}