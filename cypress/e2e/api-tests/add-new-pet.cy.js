/// <reference types="cypress" />

describe('Add a new pet to the store', () => {
    context('POST /pet', () => {
        it('Add pet - POST', () => {
            cy.api({
                method: 'POST',
                url: '/pet',
                body: {
                    "id": 0,
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
                        "id": 0,
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