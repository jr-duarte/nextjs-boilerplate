/// <reference path="../support/index.d.ts" />

import { createQueue } from '../support/generate';

describe('Queue', () => {
  it('should create queue', () => {
    cy.visit('/');

    // Generate queue randomly
    const queue = createQueue();

    // Form
    cy.findByPlaceholderText(/ex: hospital xxx/i).type(queue.name);
    cy.findByPlaceholderText(/ex: teste de covid19/i).type(queue.description);
    cy.getByDataCy('btn-submit').click();

    // Validate
    cy.findByText(/Link para os usuários da fila/i).should('not.exist');
    cy.findByText(/Link para administração da fila/i).should('exist');
  });
});
