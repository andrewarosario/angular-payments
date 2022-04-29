import { AUTH_USER_KEY } from "src/app/models/auth-user-key";
import { mockUser } from "src/app/mocks/user.mock";
import { LoginPage } from "cypress/pages/login.page";

describe("User login", () => {
  let page: LoginPage;
  beforeEach(() => {
    page = new LoginPage();
  });

  it("should redirect unauthenticated user to signin page", () => {
    cy.visit("/home");
    cy.location("pathname").should("equal", "/login");
    cy.get("h1").should("have.text", "PayFriends");
    cy.get("h2").should("have.text", "Bem vindo de volta");
  });

  it("should redirect authenticated user to payments", () => {
    window.localStorage.setItem(AUTH_USER_KEY, JSON.stringify(mockUser));
    cy.visit("/login");
    cy.location("pathname").should("equal", "/home/payments");
  });

  it("should allow a user to login and redirect to payments", () => {
    page.visit();
    page.submitButton().should("be.disabled");
    page.typeNameAndPassword("usuario@gmail.com", "usuario");
    page.submitButton().should("be.enabled");
    page.submitButton().click();
    cy.location("pathname").should("equal", "/home/payments");
  });

  it("should display login errors", () => {
    page.visit();
    page.typeNameAndPassword("invalidemail@gmail.com", "usuario");
    page.submitButton().click();
    cy.get("simple-snack-bar").and(
      "contain",
      "Error: Usuário ou senha inválidos"
    );
  });
});
