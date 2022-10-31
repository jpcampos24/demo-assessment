/// <reference types="@cypress/xpath" />

describe('add a new employee to the HRM', () => {
    let data;
    //Login before continue with the test
    beforeEach('Login before the changes',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.fixture('orangePage').then(fData => {
            data = fData;
        })        
    })

    //add a new employee
    it('add a new Employee', () => {        
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.loginInfo.username)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.loginInfo.password)
        cy.get('.oxd-button').click()

        cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click()
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type(data.employeeData.firstName)
        cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type(data.employeeData.middleName)
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type(data.employeeData.lastName)
        cy.xpath('//input[@class="oxd-file-input"]').selectFile(data.employeeData.photo, {force: true})
        cy.get('.oxd-button--secondary').click()
    })
})