/// <reference types="cypress-xpath" />

import { HomePage } from "../page-objects/home-page"
import { MyInfoPage } from "../page-objects/myinfo-page"


describe('edit myInfo details', () => {
    const homePage = new HomePage()
    const myInfoPage = new MyInfoPage()

    //Login before continue with the test
    beforeEach('Login before the changes',() => {
        homePage.setUpViewport()
        homePage.navigate()
        homePage.loginUser('Admin')
        homePage.loginPassword('admin123')
        homePage.loginButton()
    })

    //edit personal details of the admin user
    it('should edit the information of the admin user', () =>{
        myInfoPage.goToMyInfo()
        myInfoPage.changeNicknameTo('JuanchoTest')
        myInfoPage.licenseExpirationDate('2022-12-12')
        myInfoPage.changeBloodType('O+')
        myInfoPage.savePersonalDetails()

    })


})