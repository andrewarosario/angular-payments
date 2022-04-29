export class LoginPage {
  visit(): void {
    cy.visit("/login");
  }

  typeNameAndPassword(name: string, password: string): void {
    cy.get("[name=email]").type(name);
    cy.get("[name=password]").type(password);
  }

  submitButton(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get("button[type=submit]");
  }
}
