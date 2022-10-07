export class MyInfoPage {

    //go to myInfo page
    goToMyInfo(){
        cy.get(':nth-child(6) > .oxd-main-menu-item').click()
    }

    //change Nickname
    changeNicknameTo(nicknameText){
        cy.get(':nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type(nicknameText)
    }

    //change license expiration date
    licenseExpirationDate(dateExpiration){
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').type(dateExpiration)
    }

    //change date of birth
    changeBloodType(bloodType){
        cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click({force: true})
        if(bloodType === 'A+'){
            cy.get('.oxd-select-dropdown > :nth-child(2)').click()
        }else if(bloodType === 'A-'){
            cy.get('.oxd-select-dropdown > :nth-child(3)').click()
        }else if(bloodType === 'B+'){
            cy.get('.oxd-select-dropdown > :nth-child(4)').click()
        }else if(bloodType === 'B-'){
            cy.get('.oxd-select-dropdown > :nth-child(5)').click()
        }else if(bloodType === 'O+'){
            cy.get('.oxd-select-dropdown > :nth-child(6)').click()
        }
    }

    //save personal details
    savePersonalDetails(){
        cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button').click()
    }
}