export class CheckoutPage {

    //click on proceed to checkout page
    clickProceedCheckout(xpathProceedButton){
        cy.xpath(xpathProceedButton).click()
    }

    //validate is in checkout page
    validateCheckout(xpathCheckoutValidation){
        cy.xpath(xpathCheckoutValidation).should('be.visible')
    }

    //validate the item added is the correct item
    validateItem(itemName){
        cy.xpath('//td//p[@class="product-name"]//a').should('have.text', itemName)
    }
}