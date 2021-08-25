describe("Test login", () => {
  it("Get logged in", () => {
    cy.visit('http://localhost:3000/')
    cy.get("input#email").type("janet.weaver@reqres.in");
    cy.get("input#password").type("1234");
    cy.contains("Submit").click();
    cy.contains("Logged");
  });
});
