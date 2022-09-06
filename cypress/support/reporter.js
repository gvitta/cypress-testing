const cucumberHTMLReporter = require('cucumber-html-reporter');
const world = this;
const cucumberOptions = {
    theme: 'bootstrap',
    jsonDir: 'cypress/reports/json',
    output: 'cypress/reports/html/cucumber_report.html',
    reportSuiteAsScenarios: true,
    name: 'Cypress Automation',
    brandTitle: 'Cypress BDD Test Report',
    scenarioTimestamp: true,
    launchReport: false,
    ignoreBadJsonFile: true
};

cucumberHTMLReporter.generate(cucumberOptions);
