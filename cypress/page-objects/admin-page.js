export class AdminPage{
    
    //go to the admin panel aside
    adminPanel(){
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    }

    //validate the panel
    panelValidation(panelTitle){
        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text', panelTitle)
    }

    //send Username to search
    searchUsername(userName){
        cy.scrollTo('top')
        cy.get(':nth-child(2) > .oxd-input').type(userName)
    }

    //select user Role
    selectUserRole(role){
        cy.scrollTo('top')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').select(role)
    }

    //send Employee name to search
    searchEmployeeName(name){
        cy.scrollTo('top')
        cy.get('.oxd-autocomplete-text-input > input').type(name)
    }

    //select status of the user
    statusUser(status){
        cy.scrollTo('top')
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').select(status)
    }

    //search user
    search(){
        cy.xpath('//button[@type="submit"]').click({force: true})
    }
}