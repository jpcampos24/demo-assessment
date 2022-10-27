/// <reference types="@cypress/xpath" />

import { HomePage } from "../../page-objects/home-page"
import { MyInfoPage } from "../../page-objects/myinfo-page"


describe('edit myInfo details', () => {
    const homePage = new HomePage()
    const myInfoPage = new MyInfoPage()

    //Login before continue with the test
    beforeEach('Login before the changes',() => {
        homePage.setUpViewport()
        homePage.navigate()
        homePage.loginUser(Cypress.env('LOGIN_DATA').USER)
        homePage.loginPassword(Cypress.env('LOGIN_DATA').PASSWORD)
        homePage.loginButton()
    })

    //edit personal details of the admin user
    it('should edit the information of the admin user', () =>{
        myInfoPage.goToMyInfo()
        myInfoPage.changeNicknameTo(Cypress.env('EDIT_PERSONAL_DETAILS_DATA').NICK_NAME)
        myInfoPage.licenseExpirationDate(Cypress.env('EDIT_PERSONAL_DETAILS_DATA').LICENSE_EXPIRATION_DATE)
        myInfoPage.changeBloodType(Cypress.env('EDIT_PERSONAL_DETAILS_DATA').BLOOD_TYPE)
        myInfoPage.savePersonalDetails()

    })


})