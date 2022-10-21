/// <reference types="cypress" />

describe("DB Testing", () => {
    it("Add a new employee to the table", () => {
        cy.task(
            "queryDb",
            "INSERT INTO `demo-assessment`.`employees` (`idemployees`, `name`, `lastname`, `email`, `telephone`, `city`, `country`, `t-shir size`) VALUES ('5', 'javier', 'solis', 'javier@solis.com', '123456577', 'pereira', 'colombia', 's');"
        ).then(result => {
            expect(result.affectedRows).to.equal(1);
          });
    })

    it("Select an employee to the table", () => {
        cy.task(
            "queryDb",            
            "SELECT * FROM `demo-assessment`.employees WHERE name='javier' AND lastname='solis';"
        ).then(count => {
            expect(count).to.have.lengthOf(1);
          });
    })

    it("Update an existing employee to the table", () => {
        cy.task(
            "queryDb",
            "UPDATE `demo-assessment`.`employees` SET email='javier1@solis.com' WHERE name='javier' AND lastname='solis';"
        ).then(result => {
            expect(result.message).to.equal("(Rows matched: 1  Changed: 1  Warnings: 0");
          });
    })

    it("Delete an employee to the table", () => {
        cy.task(
            "queryDb",
            "DELETE FROM `demo-assessment`.`employees` WHERE name='javier' AND lastname='solis';"
        ).then(result => {
            expect(result.affectedRows).to.equal(1);
          });
    })
})