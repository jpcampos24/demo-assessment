export class SearchItem{

    //search an item in the searchbox
    searchItem(itemToSearch){
        cy.xpath('//input[@id="search_query_top"]', {timeout: 50000}).type(itemToSearch+'{enter}')
    }
}