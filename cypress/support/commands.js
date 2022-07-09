// ***********************************************
// These tests are the common steps for both mobile and desktop tests.
// ***********************************************

// open homepage
Cypress.Commands.add("openHomeLoansPage", () => {
    cy.visit("home-loans");
});

// click on login button
Cypress.Commands.add("clickLoginBtn", () => {
    cy.get("#skip-1").click();
});