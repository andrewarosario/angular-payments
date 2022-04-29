describe("My First Test", () => {
  it("Visits the initial project page", () => {
    cy.visit("/");
    cy.url().should("contain", "login");
    cy.get("h1").should("have.text", "PayFriends");
    cy.get("h2").should("have.text", "Bem vindo de volta");

    cy.get("[name=email]").type("usuario@gmail.com");
    cy.get("[name=password]").type("usuario");
    cy.get("button[type=submit]").click();

    cy.url().should("contain", "home/payments");

    cy.get("h1").first().should("have.text", "PayFriends");
    cy.get("h1.ui-title").should("have.text", "Meus pagamentos");

    cy.get("tr.mat-row").should("have.length", 5);

    cy.get("input").first().type("pennie");
    cy.get("tr.mat-row").should("have.length", 1);
  });
});
