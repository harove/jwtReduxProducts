describe("Test cypress.io", () => {
  it.skip("Visitar pestaña de features", () => {
    cy.visit("https://www.cypress.io/");
    cy.contains("Features").click({ force: true });
    cy.url().should("include", "/features");
  });
});


