
Feature: To Test API functionalities using Cypress Framework

    @getEndpointTest
    Scenario Outline:  Validate Customer able to retrieve employee data with GET endpoint
        Given User access "<URL>" endpoint
        Then "200" Success response should be received

        Examples:
            | URL                                               |
            | https://dummy.restapiexample.com/api/v1/employees |


