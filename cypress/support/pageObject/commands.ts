declare namespace Cypress {
    interface Chainable<Subject> {
      getByClass: typeof getByClass,
      getByAttribute: typeof getByAttribute
    }
  }
  
  function getByClass(field: string) {
    return cy.get(`.${field}`);
  }
  
  function getByAttribute(attribute: string, value: string) {
    return cy.get(`[${attribute}="${value}"]`);
  }
  
  Cypress.Commands.add('getByClass', getByClass);
  Cypress.Commands.add('getByAttribute', getByAttribute);