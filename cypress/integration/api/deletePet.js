describe("Pet Store api test cases", () => {
    it("delete a pet id", () => {
        // this request create a new pet ID
        cy.request({
            method: "POST",
            url: "https://petstore.swagger.io/v2/pet/",
            body: {
                id: 2,
                category: {
                    id: 2,
                    name: "Bosco",
                },
                name: "New Pet Bosco",
                photoUrls: ["string"],
                tags: [{
                    id: 0,
                    name: "string",
                }, ],
                status: "available",
            },
        }).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body.category).has.property("name", "Bosco");
            expect(res.body).has.property("name", "New Pet Bosco");
        });
        // this request delete all data for pet ID = 2
        cy.request({
            method: "DELETE",
            url: "https://petstore.swagger.io/v2/pet/2",
        }).then((res) => {
            // this command display the request log
            cy.log(JSON.stringify(res));
            expect(res.status).to.eq(200);
        });
    });
});