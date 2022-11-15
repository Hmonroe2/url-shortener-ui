describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
    cy.intercept('GET','http://localhost:3001//api/v1/urls')
  })





  it('passes', () => {
    cy.visit()
  })
})