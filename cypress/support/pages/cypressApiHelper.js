///<reference types="Cypress" />

class cypressApiHelper {

    requestEndpoint(endpoint, statusCode) {
        cy.request({
            method: "GET",
            url: endpoint,

        }).then((response) => {
            cy.log(JSON.stringify(response));
            expect(response.status).to.eq(parseInt(statusCode));
        })
    }
}
module.exports = cypressApiHelper;