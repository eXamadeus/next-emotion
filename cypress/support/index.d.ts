/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Example command here, this command does nothing
     */
    noop(): Chainable<Subject>
  }
}
