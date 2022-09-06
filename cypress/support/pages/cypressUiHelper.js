///<reference types="Cypress" />
import BTN_LOGINTOPSGROUPE from "../locators/pscloudWelcomePage.locators";

class cypressUiHelper {

    get PSCloudHomePageElements(){
        return require('../locators/pscloudWelcomePage.locators');
    }

    setUrl(url) {
        cy.log("URL recieved is::::", url);
        cy.visit(url);
    }

    clickOnLogin() {
        cy.xpath(this.PSCloudHomePageElements.BTN_LOGINTOPSGROUPE).click();
    }
}
module.exports = cypressUiHelper;