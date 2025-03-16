const registrationPage = require("../../pages/RegistrationPage");
const productsPage = require("../../pages/ProductsPage");
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("the user navigates to the signup page", (role) => {
    cy.visit('/');
    registrationPage.clickSignupLogin();
});

When("the user enters valid registration details {string}", (id) => {
    cy.fixture("registrations").then((registrations) => {
        const registration = registrations.find((registration) => registration.id === id);
        registrationPage.createUserAccount(registration);
    });
});

Then("the user should be successfully registered", () => {
    registrationPage.verifyRegistration();
});

When("submits the registration form", () => {
    registrationPage.clickCreateAccount();
});

When("the user clicks on the continue button", () => {
    registrationPage.clickContinue();
});

When("the user clicks on signup", () => {
    registrationPage.clickSignup();
});

When("the user should see the Logout link", () => {
    registrationPage.verifyLogout();
});

When("the user deletes their account", () => {
    registrationPage.deleteAccount();
});

When("the account should be removed successfully", () => {
    registrationPage.verifyDelete();
});

When("the user enters an email {string}", (email) => {
    registrationPage.typeEmail(email);
});

Then("the email field should display an error message {string}", (error) => {
    registrationPage.verifyEmailErrorMessage(error);
});

When("the user enters a name {string}", (name) => {
    registrationPage.typeName(name);
});

Then("the Login to your account heading should be visible", () => {
    registrationPage.verifyLoginToYourAccount();
});

When("the user enters a login email {string}", (email) => {
    registrationPage.typeLoginEmail(email);
});

When("the user enters a password {string}", (password) => {
    registrationPage.typePassword(password);
});

When("clicks on the login button", () => {
    registrationPage.clickLogin();
});

Then("the system should display Logged in as username", () => {
    registrationPage.verifyLoggedIn();
});

When("the user clicks on the Logout button", () => {
    registrationPage.clickLogout();
});

When("the user navigates to the Products page", () => {
    cy.visit("/products");
});

When("the user adds {string} to the shopping cart", (product) => {
    productsPage.addProductToCart(product);
});

When("proceeds to the cart page", () => {
    productsPage.clickCart();
});

When("clicks on proceed to checkout", () => {
    productsPage.clickProceedToCheckout();
});

When("fills in the payment card details {string}", (id) => {
    cy.fixture("card_details").then((cardDetails) => {
        const cardDetail = cardDetails.find((cardDetail) => cardDetail.id === id);
        productsPage.enterCardDetails(cardDetail);
    });
});

When("clicks on place order", () => {
    productsPage.clickPlaceOrder();
});

When("confirms the order", () => {
    productsPage.confirmOrder();
});

When("the system should display the confirmation message Order Placed", () => {
    productsPage.verifyOrderPlaced();
});

When("the user logs in with {string} credentials", (id) => {
    cy.fixture("registrations").then((registrations) => {
        const registration = registrations.find((registration) => registration.id === id);
        registrationPage.login(registration);
    });
});

Then("the product list should be visible", () => {
    productsPage.verifyProductList();
});

When("the user clicks on View Product for the first product", () => {
    productsPage.clickFirstViewButton();
});

Then("the user should land on the product detail page", () => {
    productsPage.verifyPDP();
});

Then("the product detail {string} should be displayed", (detail) => {
    if (detail.toLowerCase() === "product image") {
        productsPage.verifyProductImage();
    }
    else if (detail.toLowerCase() === "product name") {
        productsPage.verifyProductName();
    }
    else if (detail.toLowerCase() === "price") {
        productsPage.verifyPrice();
    }
    else if (detail.toLowerCase() === "product availablity") {
        productsPage.verifyProductAvailability();
    }
    else if (detail.toLowerCase() === "condition") {
        productsPage.verifyProductCondition();
    }
    else if (detail.toLowerCase() === "brand") {
        productsPage.verifyProductBrand();
    }
});

Then("the system should display a message {string}", (message) => {
    productsPage.verifyEmptyCartMessage(message);
});

When("the user leaves the {string} empty", (field) => {
    if (field === "Name on Card") {
        productsPage.emptyNameOnCard();
    }
    else if (field === "Card Number") { 
        productsPage.emptyCardNumber();
    }
    else if (field === "CVC") { 
        productsPage.emptyCVC();
    }
    else if (field === "Expiration Month") { 
        productsPage.emptyExpirationMonth();
    }
    else if (field === "Expiration Year") { 
        productsPage.emptyExpirationYear();
    }
});

Then("the field {string} should display {string}", (field, message) => {
    productsPage.verifyMessage(field, message);
});
