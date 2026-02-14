describe("Home", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("loads and shows hero section", () => {
    cy.contains("Vincent Tran").should("be.visible");
    cy.contains("Software Engineer").should("be.visible");
  });

  it("has skip link that navigates to main content", () => {
    cy.get('a[href="#main"]').should("contain", "Skip to main content").click();
    cy.get("#main").should("exist").and("be.visible");
  });

  it("navigates to Experience section", () => {
    cy.contains("a", "Experience").click();
    cy.get("#experience").should("be.visible");
  });

  it("shows projects section with at least one project", () => {
    cy.get("#projects").scrollIntoView();
    cy.contains("Projects").should("be.visible");
    cy.get("article").should("have.length.at.least", 1);
  });

  it("shows Resume & CV section with tabs", () => {
    cy.get("#resume").scrollIntoView();
    cy.contains("Resume & CV").should("be.visible");
    cy.get('[role="tablist"]').should("be.visible");
    cy.get('[role="tab"]').should("have.length", 2);
  });
});
