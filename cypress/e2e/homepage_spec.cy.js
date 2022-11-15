describe('empty spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      statusCode: 200,
      fixture: 'urls.json',
    }).as('urls');
   cy.visit('localhost:3000');
  });

  it('When a user visits the page, they can view the page title and the existing shortened URLs', () => {
    cy.get('h1').contains('URL Shortener');
    cy.get('.url').get('h3').contains('TEST');
    cy.get('a').contains('http://localhost:3001/useshorturl/1');
    cy.get('p').contains(
      'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
    );
  });
  it('When a user visits the page, they can view the Form with the proper inputs', () => {
    cy.get('[placeholder="Title..."]');
    cy.get('[placeholder="URL to Shorten..."]');
    cy.get('button');
  });
  it('When a user fills out the form, the information is reflected in the input fields', () => {
    cy.get('[placeholder="Title..."]').type('Hunters url');
    cy.get('[placeholder="Title..."]').should('have.value', 'Hunters url');
    cy.get('[placeholder="URL to Shorten..."]').type('www.lost.com');
    cy.get('[placeholder="URL to Shorten..."]').should(
      'have.value',
      'www.lost.com'
    );
  });

});
