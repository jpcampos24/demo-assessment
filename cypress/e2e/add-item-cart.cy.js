/// <reference types="cypress-xpath" />

import { AddItem } from "../page-objects/add-cart-item"
import { CheckoutPage } from "../page-objects/checkout-page"
import { HomePage } from "../page-objects/home-page"
import { SearchItem} from "../page-objects/search-item"

describe('add an item to the cart', () => {
    const homePage = new HomePage()
    const searchItem = new SearchItem()
    const addItem = new AddItem()
    const checkoutPage = new CheckoutPage()

    //setUp page size
    beforeEach(() => {
        cy.viewport(1536, 960)
    })

    //load the main page
    it('sould navigate to Clothes Shop main page', () => {
        homePage.navigate()
        homePage.validateHomePage()
    })    
    
    //this function search the item to add
    it('should search the item', () => {
        searchItem.searchItem('t-shirt')
     })

    //this function add the item to the cart
    it('should add the item to the cart', () =>{
        addItem.openItem('(//a[@title="Faded Short Sleeve T-shirts"])[2]')
        addItem.addToCart('//p[@id="add_to_cart"]')
        addItem.validateItemAdded('//i[@class="icon-ok"]')
    })

    //load the checkout page
    it('sould navigate to the summary checkout', () => {
        checkoutPage.clickProceedCheckout('//a[@title="Proceed to checkout"]')
        checkoutPage.validateCheckout('//h1[@id="cart_title"]')
        checkoutPage.validateItem('Faded Short Sleeve T-shirts')
    }) 
})