/// <reference types="cypress" />

describe('Delte a pet to the store', () => {
    context('DELETE /pet/{petId}', () => {
        it('Delete pet - DELETE', () => {
            cy.api({
                method: 'DELETE',
                api_key: 'special-key',
                url: '/pet/123456789'
            }).then(({status}) => {
                expect(status).to.eq(200)
            })
        })
    })
})