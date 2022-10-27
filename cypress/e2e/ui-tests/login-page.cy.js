/// <reference types="@cypress/xpath" />

import { HomePage } from "../../page-objects/home-page"

describe('Login into OragenHRM page', () => {
    const homePage = new HomePage()

    //setUp page size
    beforeEach(() => {
        homePage.setUpViewport()
        homePage.navigate()
        homePage.validateHomePage()
    })

    //login into the main page
    it('should send the credentials and login', () => {
        homePage.loginUser(Cypress.env('LOGIN_DATA').USER)
        homePage.loginPassword(Cypress.env('LOGIN_DATA').PASSWORD)
        homePage.loginButton()
    })


})
