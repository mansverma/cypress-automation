describe("Pet Store api test cases", () => {
    it("get pet id", () => {
        cy.request({
            method: "POST",
            url: "https://petstore.swagger.io/v2/pet/",
            body: {
                id: 1,
                category: {
                    id: 1,
                    name: "Rocky",
                },
                name: "New Pet",
                photoUrls: ["string"],
                tags: [{
                    id: 0,
                    name: "string",
                }, ],
                status: "available",
            },
        }).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body).has.property("name", "New Pet");
            expect(res.body).has.property("status", "available");
        });
        cy.request({
            method: "GET",
            url: "https://petstore.swagger.io/v2/pet/1",
        }).then((res) => {
            // this command print the console log
            cy.log(JSON.stringify(res));
            expect(res.status).to.eq(200);
            expect(res.body.category.name).to.eq("Rocky");
        });
    });
});