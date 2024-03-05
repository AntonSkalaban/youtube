describe("CategorySection e2e", () => {
  it("Should change change active btn color", () => {
    cy.visit("/");

    cy.get('[data-testid="All"]').should("have.css", "color", "rgb(255, 255, 255)");
    cy.get('[data-testid="action"]').should("have.css", "color", "rgb(0, 0, 0)").click();

    cy.get('[data-testid="All"]').should("have.css", "color", "rgb(0, 0, 0)");
    cy.get('[data-testid="action"]').should("have.css", "color", "rgb(255, 255, 255)");
  });

  it("Should get the default style when the title changes", () => {
    cy.visit("/");

    cy.get('[data-testid="action"]').click();
    cy.get('[data-testid="action"]').should("have.css", "color", "rgb(255, 255, 255)");

    cy.get("input[type='text']").type("react{enter}");

    cy.get('[data-testid="action"]').should("have.css", "color", "rgb(0, 0, 0)");
  });
});
