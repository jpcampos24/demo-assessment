/// <reference types="cypress-xpath" />

import { HomePage } from "../page-objects/home-page"

describe('Login into OragenHRM page', () => {
    const homePage = new HomePage()

    //setUp page size
    beforeEach(() => {
        homePage.setUpViewport()
    })

    //load the main page
    it('sould navigate to orange page', () => {
        homePage.navigate()
        homePage.validateHomePage()
    })

    //login into the main page
    it('should send the credentials and login', () => {
        homePage.loginUser('Admin')
        homePage.loginPassword('admin123')
        homePage.loginButton()
        //this should be fixed
        homePage.loginUser('Admin')
        homePage.loginPassword('admin123')
        homePage.loginButton()
    })


})
