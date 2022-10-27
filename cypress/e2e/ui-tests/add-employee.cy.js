/// <reference types="@cypress/xpath" />

import { HomePage } from "../../page-objects/home-page"
import { PimPage } from "../../page-objects/pim-page"

describe('add a new employee to the HRM', () => {
    const homePage = new HomePage()
    const pimPage = new PimPage()

    //Login before continue with the test
    beforeEach('Login before the changes',() => {
        homePage.setUpViewport()
        homePage.navigate()
        homePage.loginUser(Cypress.env('LOGIN_DATA').USER)
        homePage.loginPassword(Cypress.env('LOGIN_DATA').PASSWORD)
        homePage.loginButton()
    })

    //add a new employee
    it('add a new Employee', () => {
        pimPage.goToPim()
        pimPage.clickAddNewUser()
        pimPage.firstName(Cypress.env('ADD_EMPLOYE_DATA').FIRST_NAME)
        pimPage.middleName(Cypress.env('ADD_EMPLOYE_DATA').MIDDLE_NAME)
        pimPage.lastName(Cypress.env('ADD_EMPLOYE_DATA').LAST_NAME)
        pimPage.empoyeePhoto(Cypress.env('ADD_EMPLOYE_DATA').PHOTO)
        pimPage.saveEmployee()
    })
})