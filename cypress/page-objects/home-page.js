export class HomePage {
    
    //setUp viewport
    setUpViewport(){
        cy.viewport(1536, 960) 
    }

    //navigate to the main page to test
    navigate(){
        let url = Cypress.config().baseUrlUI;
        cy.visit(url);
        //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    
    //validate the main page load correctly
    validateHomePage(){
        cy.xpath('//img[@alt="company-branding"]').should('be.visible')
    }

    //write user to login
    loginUser(user){
        cy.xpath('//input[@name="username"]').type(user)
    }
    
    //write password login
    loginPassword(password){
        cy.xpath('//input[@name="password"]').type(password)
    }

    //login button
    loginButton(){
        cy.xpath('//button[@class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()
    }

}