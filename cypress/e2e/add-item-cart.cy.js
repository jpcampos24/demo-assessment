/// <reference types="cypress-xpath" />

import { AddItem } from "../page-objects/add-cart-item"
import { Cart } from "../page-objects/cart-content"
import { HomePage } from "../page-objects/home-page"
import { SearchItem, SelectCategory } from "../page-objects/search-item"

describe('add an Today deals item to the cart', () => {
    const homePage = new HomePage()
    const searchItem = new SearchItem()
    const addItem = new AddItem()
    const cartContent = new Cart
    
    //load the main page
    it('sould navigate to Amazon main page', () => {
        homePage.navigate()
        homePage.validateHomePage()
    })    
    
    //this function search the item to add
    it('should search the item', () => {
        searchItem.searchItem('Computers')
     })

    //this function add the item to the cart
    it('should add the item to the cart', () =>{
        addItem.openItem('//div[@cel_widget_id="MAIN-SEARCH_RESULTS-1"]')
        addItem.addToCart('//input[@id="add-to-cart-button"]')
        addItem.validateItemAdded('//div[@id="attachDisplayAddBaseAlert"]')
    })
})