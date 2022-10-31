/// <reference types="@cypress/xpath" />

describe('Login into OragenHRM page', () => {
    let data;
    //setUp page size
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.fixture('orangePage').then(fData => {
            data = fData;
        })
    })

    //login into the main page
    it('should send the credentials and login', () => {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.loginInfo.username)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.loginInfo.password)
        cy.get('.oxd-button').click()
    })


})
