describe("SerchBar e2e", () => {
  it("Should change value", () => {
    cy.visit("/");

    cy.get("input[type='text']")
      .should("be.visible")
      .should("have.value", "")
      .should("have.attr", "placeholder", "Search...")
      .type("react");
    cy.get("input[type='text']").should("have.value", "react");
  });

  it("Should open searchs suggestions", () => {
    cy.visit("/");

    cy.get('[data-testid="search-suggestions"]').should("not.exist");

    cy.get("input[type='text']").type("react");

    cy.get('[data-testid="search-tips"]').should("exist");
  });

  it("Should reset value and render", () => {
    cy.visit("/");

    cy.get("input[type='text']").type("react");

    cy.get('[data-testid="action"]').click();

    cy.get("input[type='text']").should("have.value", "");
  });
});
