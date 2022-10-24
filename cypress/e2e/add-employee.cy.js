/// <reference types="@cypress/xpath" />

import { HomePage } from "../page-objects/home-page"
import { PimPage } from "../page-objects/pim-page"

describe('add a new employee to the HRM', () => {
    const homePage = new HomePage()
    const pimPage = new PimPage()

    //Login before continue with the test
    beforeEach('Login before the changes',() => {
        homePage.setUpViewport()
        homePage.navigate()
        homePage.loginUser('Admin')
        homePage.loginPassword('admin123')
        homePage.loginButton()
    })

    //add a new employee
    it('add a new Employee', () => {
        pimPage.goToPim()
        pimPage.clickAddNewUser()
        pimPage.firstName('Juan')
        pimPage.middleName('test')
        pimPage.lastName('Test')
        pimPage.empoyeePhoto('cypress/images/employeePhoto.png')
        pimPage.saveEmployee()
    })
})