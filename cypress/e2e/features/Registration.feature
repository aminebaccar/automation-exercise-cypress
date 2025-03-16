Feature: User Account Registration and Deletion

  Scenario: Successful user registration, login, and deletion
    Given the user navigates to the signup page
    When the user enters valid registration details "valid_registration"
    And the user logs in with "valid_registration" credentials
    And clicks on the login button
    Then the user should see the Logout link
    When the user deletes their account
    Then the account should be removed successfully
    
  Scenario: Registration fails with an invalid email
    Given the user navigates to the signup page
    When the user enters a name "Test Name"
    When the user enters an email "invalid-email.com"
    And the user clicks on signup
    Then the email field should display an error message "Veuillez inclure \"@\" dans l'adresse e-mail. Il manque un symbole \"@\" dans \"invalid-email.com\"."

  Scenario: Successful user login and logout
    Given the user navigates to the signup page
    Then the Login to your account heading should be visible
    When the user enters a login email "test_email@mock.com"
    And the user enters a password "amine567"
    And clicks on the login button
    Then the system should display Logged in as username
    When the user clicks on the Logout button
    Then the Login to your account heading should be visible
