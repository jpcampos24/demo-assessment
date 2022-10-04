export class HomePage {
    
    //setUp viewport
    setUpViewport(){
        cy.viewport(1536, 960) 
    }
    //navigate to the main page to test
    navigate(){
        cy.visit('https://www.amazon.com/')
    }
    
    //validate the main page load correctly
    validateHomePage(){
        cy.xpath('//a[@id="nav-logo-sprites"]', {timeout: 50000}).should('be.visible')
    }

    //go to the main page
    goToMainPage(){
        cy.xpath('//a[@id="nav-logo-sprites"]').click()
    }

}