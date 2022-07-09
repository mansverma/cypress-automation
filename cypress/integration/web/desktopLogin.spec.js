// ***********************************************
// This test is to check Ubank login button in desktop
// ***********************************************

describe("Validate user login page - Desktop", function() {
    it("should load user login form after clicking on login button", () => {
        cy.openHomeLoansPage();
        cy.clickLoginBtn();
        cy.url().should("include", "/welcome/login/username");
    });
});