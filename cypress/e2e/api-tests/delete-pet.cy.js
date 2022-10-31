/// <reference types="cypress" />

describe('Delte a pet to the store', () => {
    context('DELETE /pet/{petId}', () => {
        it('Delete pet - DELETE', () => {
            cy.api({
                method: 'DELETE',
                api_key: 'special-key',
                url: 'https://petstore.swagger.io/v2/pet/123456789'
            }).then(({status}) => {
                expect(status).to.eq(200)
            })
        })
    })
})