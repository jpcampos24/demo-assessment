export class PimPage{

    //go to PIM page
    goToPim(){
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
    }

    //add new user button
    clickAddNewUser(){
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
    }

    //input the first name of the employee
    firstName(firstNameText){
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type(firstNameText)
    }

    //input the middle name of the employee
    middleName(middleNameText){
        cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type(middleNameText)
    }

    //send the last name of the user
    lastName(lastNameText){
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type(lastNameText)
    }

    //send photo of the employee
    empoyeePhoto(photoRoot){
        cy.xpath('//input[@class="oxd-file-input"]').selectFile(photoRoot, {force: true})
    }

    //save employee
    saveEmployee(){
        cy.get('.oxd-button--secondary').click() 
    }
}