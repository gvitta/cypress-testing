import { And, Given, When } from "cypress-cucumber-preprocessor/steps";
import cypressApiHelper from "../pages/cypressApiHelper";

const apiTestService = new cypressApiHelper();

let url = "";
Given('User access {string} endpoint', (endpoint) => {
    url = endpoint;

});

Then('{string} Success response should be received', (statusCode) => {
    apiTestService.requestEndpoint(url,statusCode);
});

