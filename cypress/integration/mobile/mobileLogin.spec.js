// ***********************************************
// This test is to check Ubank login button in mobile
// ***********************************************

describe("Validate user login page - Mobile", function() {
    it("should load user login form after clicking on login button", () => {
        cy.openHomeLoansPage();
        //open browser in iphoneX viewport
        cy.viewport(375, 812);
        cy.clickLoginBtn();
        cy.url().should("include", "/welcome/login/username");
    });
});