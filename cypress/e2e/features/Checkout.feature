Feature: Checkout Process

  Scenario: User successfully completes the checkout process
    Given the user navigates to the signup page
    Then the Login to your account heading should be visible
    When the user enters a login email "test_email@mock.com"
    And the user enters a password "amine567"
    And clicks on the login button
    When the user navigates to the Products page
    And the user adds "Blue Top" to the shopping cart
    And proceeds to the cart page
    And clicks on proceed to checkout
    And clicks on place order
    And fills in the payment card details "card_details"
    And confirms the order
    Then the system should display the confirmation message Order Placed

  Scenario: User views all products and accesses product details
    Given the user navigates to the Products page
    Then the product list should be visible
    When the user clicks on View Product for the first product
    Then the user should land on the product detail page
    And the product detail "Product Name" should be displayed
    And the product detail "Product Image" should be displayed
    And the product detail "Price" should be displayed
    And the product detail "Product Availability" should be displayed
    And the product detail "Condition" should be displayed
    And the product detail "Brand" should be displayed

  Scenario: User attempts to checkout without adding items to the cart
    Given the user navigates to the Products page
    When proceeds to the cart page
    Then the system should display a message "Cart is empty! Click here to buy products."

  Scenario: User attempts to checkout with invalid payment details
    Given the user navigates to the signup page
    Then the Login to your account heading should be visible
    When the user enters a login email "test_email@mock.com"
    And the user enters a password "amine567"
    And clicks on the login button
    When the user navigates to the Products page
    And the user adds "Blue Top" to the shopping cart
    And proceeds to the cart page
    And clicks on proceed to checkout
    And clicks on place order
    And fills in the payment card details "card_details"
    When the user leaves the "<field>" empty
    And confirms the order
    Then the field "<field>" should display "Veuillez renseigner ce champ."

    Examples:
      | field            |
      | Name on Card     |
      | Card Number      |
      | CVC              |
      | Expiration Month |
      | Expiration Year  |
