/// <reference types="cypress" />

describe('Edit a pet to the store', () => {
    context('PUT /pet', () => {
        it('Edit pet - PUT', () => {
            cy.api({
                method: 'PUT',
                url: '/pet',
                body: {
                    "id": 0,
                    "category": {
                        "id": 123456789,
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
                    "status": "sold"
                }
            }).then(({status}) => {
                expect(status).to.eq(200)
            })
        })
    })
})