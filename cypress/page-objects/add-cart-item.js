export class AddItem { 

    //open the item to add
    openItem(xpathOpenItem){
        cy.xpath(xpathOpenItem).click()
    }
    
    //add to the cart button selection
    addToCart(xpathAddItemButton){
        cy.xpath(xpathAddItemButton).click()
    }

    //validate the item was added
    validateItemAdded(xpathItemAdded){
        cy.xpath(xpathItemAdded, {timeout: 50000}).should('be.visible')      
    }

}

