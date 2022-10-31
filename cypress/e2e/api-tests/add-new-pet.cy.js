/// <reference types="cypress" />

describe('Add a new pet to the store', () => {
    context('POST /pet', () => {
        it('Add new pet - POST', () => {
            cy.api({
                method: 'POST',
                url: 'https://petstore.swagger.io/v2/pet',
                body: {
                    "id": 123456789,
                    "category": {
                      "id": 0,
                      "name": "string"
                    },
                    "name": "doggie",
                    "photoUrls": [
                      "string"
                    ],
                    "tags": [
                      {
                        "id": 123456789,
                        "name": "string"
                      }
                    ],
                    "status": "available"
                  }
            }).then(({status}) => {
                expect(status).to.eq(200)
            })
        })
    })
})