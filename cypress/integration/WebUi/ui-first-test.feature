Feature: Test Web UI Automation using Cypress Framework

    @test
    Scenario Outline: Validate Customer able to access the page navigate to booking of
        Given User launches "<URL>"
            And Clicks on Login button

        Examples:
            | URL                                 |
            | http://psinnersource.pscloudhub.com |

