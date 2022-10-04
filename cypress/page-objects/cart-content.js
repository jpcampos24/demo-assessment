export class Cart{

    //goes to the cart to check the content
    navigateToCart(xpathToNavigate){
        cy.xpath(xpathToNavigate).click()
    }
}