/// <reference types="@cypress/xpath" />

import { AdminPage } from "../../page-objects/admin-page"
import { HomePage } from "../../page-objects/home-page"

describe('Search an existing admin user', () => {
    const homePage = new HomePage()
    const adminPage = new AdminPage()

    //Login before continue with the test
    beforeEach('Login before the changes',() => {
        homePage.setUpViewport()
        homePage.navigate()
        homePage.loginUser(Cypress.env('LOGIN_DATA').USER)
        homePage.loginPassword(Cypress.env('LOGIN_DATA').PASSWORD)
        homePage.loginButton()

        adminPage.adminPanel()
        adminPage.panelValidation(Cypress.env('SEARCH_USER_DATA').PANEL_VALIDATION)
    })

    //Search user by Username
    it('Search user by Username', () => {
        adminPage.searchUsername(Cypress.env('SEARCH_USER_DATA').USER_ROLE)
        adminPage.search()
    })

    //search user by Username and Employee name
    it('Search user by Username and role', () => {
        adminPage.searchUsername(Cypress.env('SEARCH_USER_DATA').USER_ROLE)
        adminPage.searchEmployeeName(Cypress.env('SEARCH_USER_DATA').EMPLOYEE_NAME)
        adminPage.search()
    })

})