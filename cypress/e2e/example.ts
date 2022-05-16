/// <reference path="../support/index.d.ts" />

describe.skip('Cypress TS', () => {
  it('should go to go Google', () => {
    cy.google();
  });

  it('should change light/dark theme on willian justen site', () => {
    cy.visit('https://willianjusten.com.br');

    cy.findAllByTitle(/Mudar o Tema/i).click();
    cy.get('.light').should('exist');

    cy.findAllByTitle(/Mudar o Tema/i).click();
    cy.get('.dark').should('exist');
  });
});
