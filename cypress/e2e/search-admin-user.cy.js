/// <reference types="cypress-xpath" />

import { AdminPage } from "../page-objects/admin-page"
import { HomePage } from "../page-objects/home-page"

describe('Search an existing admin user', () => {
    const homePage = new HomePage()
    const adminPage = new AdminPage()

    //Login before continue with the test
    beforeEach('Login before the changes',() => {
        homePage.setUpViewport()
        homePage.navigate()
        homePage.loginUser('Admin')
        homePage.loginPassword('admin123')
        homePage.loginButton()

        adminPage.adminPanel()
        adminPage.panelValidation('Admin')
    })

    //Search user by Username
    it('Search user by Username', () => {
        adminPage.searchUsername('Admin')
        adminPage.search()
    })

    //search user by Username and Employee name
    it('Search user by Username and role', () => {
        adminPage.searchUsername('Admin')
        adminPage.searchEmployeeName('fgh Collings')
        adminPage.search()
    })

})