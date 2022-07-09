describe("Pet Store api test cases", () => {
    it("update pet name", () => {
        // this request create a new pet ID
        cy.request({
            method: "POST",
            url: "https://petstore.swagger.io/v2/pet/",
            body: {
                id: 4,
                category: {
                    id: 4,
                    name: "Dixy",
                },
                name: "New Pet again",
                photoUrls: ["string"],
                tags: [{
                    id: 0,
                    name: "string",
                }, ],
                status: "available",
            },
        }).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body).has.property("name", "New Pet again");
            expect(res.body).has.property("status", "available");
        });

        // this request update the name of newly created pet ID
        cy.request({
            method: "PUT",
            url: "https://petstore.swagger.io/v2/pet/",
            body: {
                id: 4,
                category: {
                    id: 4,
                    name: "Daizy",
                },
                name: "Updated Pet Name",
                photoUrls: ["string"],
                tags: [{
                    id: 0,
                    name: "string",
                }, ],
                status: "available",
            },
        }).then((res) => {
            // this command display the request log
            cy.log(JSON.stringify(res));
            expect(res.status).to.eq(200);
            expect(res.body).has.property("id", 4);
            expect(res.body.category).has.property("name", "Daizy");
            expect(res.body).has.property("name", "Updated Pet Name");
        });
    });
});