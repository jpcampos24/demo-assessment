/// <reference types="cypress" />

describe('Finds Pets by status', () => {
    context('GET /pet/findByStatus', () => {
        it('Find pets - GET', () => {
            cy.api({
                method: 'GET',
                url: 'https://petstore.swagger.io/v2/pet/findByStatus?status=available'
            }).then(({status, body}) => {
                expect(status).to.eq(200)
                expect(body[0].name).to.be.a('String')
            })
        })
    })
})