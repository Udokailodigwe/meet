Feature: SPECIFY NUMBER OF EVENTS

  Scenario: When user hasnt specified a number, 32 is the default number.
    Given the user is on the main page of the app
    When the user hasnt specified a number of events
    Then the default number of displayed events will be 32 and 2 with local test at once

  Scenario: User can change the number of events they want to see.
    Given the user is on the main page
    When the user set a number of events they want to see in the number of events box
    Then this number of events will be displayed