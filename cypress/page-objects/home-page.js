export class HomePage {
    
    //setUp viewport
    setUpViewport(){
        cy.viewport(1536, 960) 
    }
    //navigate to the main page to test
    navigate(){
        cy.visit('http://automationpractice.com/index.php')
    }
    
    //validate the main page load correctly
    validateHomePage(){
        cy.xpath('//div[@id="header_logo"]').should('be.visible')
    }

    //go to the main page
    goToMainPage(){
        cy.xpath('//div[@id="header_logo"]').click()
    }

}