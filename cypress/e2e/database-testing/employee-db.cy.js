/// <reference types="cypress" />
describe("DB Testing", () => {
    it("Add a new employee to the table", () => {
        cy.task(
            "queryDb",
            "SELECT * FROM `demo-assessment`.employees WHERE idemployees=1;"
        ).then(count => {
            expect(count).to.have.lengthOf(1);
          });
    })
})