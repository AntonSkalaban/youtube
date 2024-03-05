describe("Content e2e", () => {
  it("Should render cards", () => {
    const apiKey = Cypress.env("API_KEY");
    const apiHost = Cypress.env("API_HOST");
    const apiUrl = Cypress.env("API_URL");

    cy.visit("/");

    cy.request({
      method: "GET",
      url: apiUrl + "/search",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": apiHost,
      },
      qs: {
        q: "title",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });

    cy.get('[data-testid="video-card"]').should((items) => {
      expect(items).to.have.length(16);
    });

    cy.get('[data-testid="show-more"]').click();

    cy.get('[data-testid="video-card"]').should((items) => {
      expect(items).to.have.length(32);
    });

    cy.get('[data-testid="skeleton-card"]').should("not.exist");
  });
});
