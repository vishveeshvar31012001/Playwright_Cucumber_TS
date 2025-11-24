Feature: User Login to the application

  Background:
    Given User navigate to the application

@smoke
  Scenario: Validate login with valid credentails
    Given user enter the username "Admin"
    And user enter the password "admin123"
    When user click the login button
    Then user successfully land to home screen

@functional
  Scenario: Validate login with in valid credentails
    Given user enter the username "Sdmin"
    And user enter the password "admin123"
    When user click the login button
    But user should get error message
