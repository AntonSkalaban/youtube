describe("ThemeToggle e2e", () => {
  it("Should change theme", () => {
    cy.visit("/");

    cy.get('[data-testid="action"]').should("have.css", "color", "rgb(0, 0, 0)");
    cy.get('[data-testid="theme-toggle"]').last().click({ force: true });
    cy.get('[data-testid="action"]').should("have.css", "color", "rgb(255, 255, 255)");
  });
});
