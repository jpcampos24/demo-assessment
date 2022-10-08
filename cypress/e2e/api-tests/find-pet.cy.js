/// <reference types="cypress" />

describe('Finds Pets by status', () => {
    context('GET /pet/findByStatus', () => {
        it('Find pets - GET', () => {
            cy.api({
                method: 'GET',
                url: '/pet/findByStatus?status=available'
            }).then(({status, body}) => {
                expect(status).to.eq(200)
                expect(body[0].name).to.eq('String')
            })
        })
    })
})