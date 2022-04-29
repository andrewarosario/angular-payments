import { AUTH_USER_KEY } from "src/app/models/auth-user-key";
import { mockUser } from "src/app/mocks/user.mock";

describe("User login", () => {
  it("should redirect unauthenticated user to signin page", () => {
    cy.visit("/home");
    cy.location("pathname").should("equal", "/login");
    cy.get("h1").should("have.text", "PayFriends");
    cy.get("h2").should("have.text", "Bem vindo de volta");
  });

  it("should allow a user to login and redirect to payments", () => {
    cy.visit("/");
    cy.get("button[type=submit]").should("be.disabled");
    cy.get("[name=email]").type("usuario@gmail.com");
    cy.get("[name=password]").type("usuario");
    cy.get("button[type=submit]").should("be.enabled");
    cy.get("button[type=submit]").click();
    cy.location("pathname").should("equal", "/home/payments");
  });

  it("should display login errors", () => {
    cy.visit("/login");
    cy.get("[name=email]").type("invalidemail@gmail.com");
    cy.get("[name=password]").type("usuario");
    cy.get("button[type=submit]").click();
    cy.get("simple-snack-bar").and(
      "contain",
      "Error: Usuário ou senha inválidos"
    );
  });

  it("should allow a user to logout", () => {
    window.localStorage.setItem(AUTH_USER_KEY, JSON.stringify(mockUser));
    cy.visit("/login");
  });
});
