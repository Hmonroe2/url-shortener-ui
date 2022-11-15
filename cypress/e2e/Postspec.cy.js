describe('Posts', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls',
      {
      fixture: 'urls.json',
      })
      .as('urls');
    cy.intercept('POST', 'http://localhost:3001/api/v1/urls',
      {
      fixture: 'responseUrl.json',
      })
      .as('postData');
    cy.visit('http://localhost:3000/');
  });
  it('fill out and submit the form and the new shortened URL is rendered', () => {
    cy.get('[placeholder="Title..."]').type('Hunters url');
    cy.get('[placeholder="Title..."]').should('have.value', 'Hunters url');
    cy.get('[placeholder="URL to Shorten..."]').type('www.lost.com');
    cy.get('[placeholder="URL to Shorten..."]').should(
      'have.value',
      'www.lost.com'
    );
    cy.get('button').click();
    cy.get('section > :nth-child(2)');
    cy.get(':nth-child(2) > h3').contains('Hunters url');
    cy.get(':nth-child(2) > a').contains('https://TESTURL.com');
    cy.get(':nth-child(2) > p').contains('www.lost.com');
  });
});
