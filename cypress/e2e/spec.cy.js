describe('Tic Tac Toe testing', () => {
  beforeEach(() => {
     cy.visit('http://localhost:5173')
  });

it('should board be empty and X first player', () => {
cy.get('[data-testid="status"]').should('have.text', 'Next player: X');
cy.get('.square').should('have.length', 9);
cy.get('.square').each($square => {
  cy.wrap($square).should('be.empty');
});
});
it('should player move alternately',() =>{
cy.get('[data-testid="square-0"]').click();
cy.get('[data-testid="square-0"]').should('contain','X');
cy.get('[data-testid="status"]').should('contain','Next player: O');

cy.get('[data-testid="square-5"]').click();
cy.get('[data-testid="square-5"]').should('contain','O');
cy.get('[data-testid="status"]').should('contain','Next player: X');
});

it('should declare winner',() =>{
  cy.get('[data-testid="square-0"]').click();//X
  cy.get('[data-testid="square-1"]').click();//O
  cy.get('[data-testid="square-3"]').click();//X
  cy.get('[data-testid="square-4"]').click();//O
  cy.get('[data-testid="square-6"]').click();//X
  cy.get('[data-testid="status"]').should('contain','Winner: X');

  });
  it('should game reset',() =>{
    cy.get('[data-testid="square-0"]').click();//X
    cy.get('[data-testid="square-1"]').click();//O
    cy.get('[data-testid="square-3"]').click();//X
    cy.get('[data-testid="square-4"]').click();//O
    cy.get('[data-testid="square-6"]').click();//X
    cy.get('[data-testid="status"]').should('contain','Winner: X');
    cy.get('.reset-button').click();
    cy.get('[data-testid="status"]').should('have.text', 'Next player: X');    
    cy.get('.square').each($square => {
      cy.wrap($square).should('be.empty');
    });
  });

});