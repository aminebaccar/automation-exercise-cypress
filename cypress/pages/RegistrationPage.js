class RegistrationPage {
    constructor() {
        this.elements = {
            signupLogin: () => cy.get(`[href="/login"]`),
            signup: () => cy.get(`[data-qa="signup-button"]`),
            createAccount: () => cy.get(`[data-qa="create-account"]`),
            name: () => cy.get(`[data-qa="signup-name"]`),
            email: () => cy.get(`[data-qa="signup-email"]`),
            loginEmail: () => cy.get(`[data-qa="login-email"]`),
            loginPassword: () => cy.get(`[data-qa="login-password"]`),
            login: () => cy.get(`[data-qa="login-button"]`),
            radioMr: () => cy.get(`#uniform-id_gender1`),
            radioMrs: () => cy.get(`#uniform-id_gender2`),
            password: () => cy.get(`[data-qa="password"]`),
            day: () => cy.get(`#days`),
            month: () => cy.get(`#months`),
            year: () => cy.get(`#years`),
            firstName: () => cy.get(`#first_name`),
            lastName: () => cy.get(`#last_name`),
            company: () => cy.get(`#company`),
            address1: () => cy.get(`#address1`),
            address2: () => cy.get(`#address2`),
            country: () => cy.get(`#country`),
            city: () => cy.get(`#city`),
            state: () => cy.get(`#state`),
            zipcode: () => cy.get(`#zipcode`),
            mobileNumber: () => cy.get(`#mobile_number`),
            logout: () => cy.get(`[href="/logout"]`),
            continue: () => cy.get(`[data-qa="continue-button"]`),
            deleteAccount: () => cy.get(`[href="/delete_account"]`),
            accountRegistered: () => cy.get(`h2`).contains("Account Created!"),
            accountDeleted: () => cy.get(`h2`).contains("Account Deleted!"),
            loginToYourAccount: () => cy.get(`h2`).contains("Login to your account"),
            loggedIn: () => cy.get(`a`).contains("Logged in as")
        }
    }

    clickSignupLogin() {
        this.elements.signupLogin().click();
    }

    clickSignup() {
        this.elements.signup().click();
        cy.getCookie('csrftoken').then((cookie) => {
            const token = cookie.value;
            cy.wrap(token).as('csrfToken');
        });
    }

    clickCreateAccount() {
        this.elements.createAccount().click();
    }

    enterRegistrationNameAndEmail(registration) {
        this.elements.name().type(registration.name);
        this.elements.email().type(registration.email);
    }

    verifyRegistration() {
        this.elements.accountRegistered().should('be.visible');
    }

    clickContinue() {
        this.elements.continue().click();
    }

    verifyLogout() {
        this.elements.logout().should('be.visible');
    }

    verifyDelete() {
        this.elements.accountDeleted().should('be.visible');
    }

    deleteAccount() {
        this.elements.deleteAccount().click();
    }

    typeEmail(email) {
        this.elements.email().type(email);
    }

    typeName(name) {
        this.elements.name().type(name);
    }

    typePassword(password) {
        this.elements.loginPassword().type(password);
    }

    typeLoginEmail(email) {
        this.elements.loginEmail().type(email);
    }

    clickLogin() {
        this.elements.login().click();
    }

    verifyLoginToYourAccount() {
        this.elements.loginToYourAccount().should('be.visible');
    }

    verifyEmailErrorMessage(error) {
        this.elements.email().then(($input) => {
            expect($input[0].validationMessage).to.eq(error);
        });
    }

    verifyLoggedIn() {
        this.elements.loggedIn().should('be.visible');
    }

    clickLogout() {
        this.elements.logout().click();
    }

    createUserAccount(userData) {
        cy.request({
            method: "POST",
            url: "https://automationexercise.com/api/createAccount",
            body: {
                name: userData.name,
                email: userData.email,
                password: userData.password,
                title: userData.title,
                birth_date: userData.dob.split("-")[0],
                birth_month: userData.dob.split("-")[1],
                birth_year: userData.dob.split("-")[2],
                firstname: userData.firstName,
                lastname: userData.firstName,
                company: userData.company,
                address1: userData.address1,
                address2: userData.address2,
                country: userData.country,
                zipcode: userData.zipcode,
                state: userData.state,
                city: userData.city,
                mobile_number: userData.mobileNumber
            },
            failOnStatusCode: true,
            form: true,
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    }

    login(registration) {
        this.elements.loginEmail().type(registration.email);
        this.elements.loginPassword().type(registration.password);
    }
}

module.exports = new RegistrationPage();