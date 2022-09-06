import { And, Given, When } from "cypress-cucumber-preprocessor/steps";
import cypressUiHelper from "../pages/cypressUiHelper";

const uiTestService = new cypressUiHelper();

let url = "";
Given('User launches {string}', (Url) => {
    url = Url;
    uiTestService.setUrl(url)
});

And('Clicks on Login button', () => {
    uiTestService.clickOnLogin();
});

