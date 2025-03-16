class ProductsPage {
    constructor() {
        this.elements = {
            products: () => cy.get(`[href="/products"]`),
            product: () => cy.get(".productinfo.text-center"),
            cart: () => cy.get(`li [href="/view_cart"]`).contains("Cart"),
            proceedToCheckout: () => cy.get(`a`).contains("Proceed To Checkout"),
            placeOrder: () => cy.get(`[href="/payment"]`),
            nameOnCard: () => cy.get(`[data-qa="name-on-card"]`),
            cardNumber: () => cy.get(`[data-qa="card-number"]`),
            expirationMonth: () => cy.get(`[data-qa="expiry-month"]`),
            expirationYear: () => cy.get(`[data-qa="expiry-year"]`),
            cvv: () => cy.get(`[data-qa="cvc"]`),
            payAndConfirmOrder: () => cy.get(`[data-qa="pay-button"]`),
            orderMessage: () => cy.get(`h2`).contains("Order Placed!"),
            productOverlay: (product) => cy.contains('.product-overlay', product),
            productList: () => cy.get(".features_items"),
            viewProductButtonList: () => cy.get(".nav.nav-pills.nav-justified a"),
            productDetail: () => cy.get(".product-information"),
            productImage: () => cy.get(".view-product img"),
            productName: () => cy.get(".product-information h2"),
            productAvailability: () => cy.get(".product-information p").contains("Availability"),
            productCondition: () => cy.get(".product-information p").contains("Condition"),
            productBrand: () => cy.get(".product-information p").contains("Brand"),
            price: () => cy.get(".product-information span span"),
            emptyCartMessage: () => cy.get("#empty_cart p"),
        }
    }

    clickProducts() {
        this.elements.products().click();
    }

    addProductToCart(product) {
        this.elements.productOverlay(product)
            .scrollIntoView()
            .wait(500)
            .trigger('mouseover', { force: true })
            .wait(500)
            .find('.add-to-cart')
            .click({ force: true });
    }

    clickCart() {
        this.elements.cart().click();
    }

    clickProceedToCheckout() {
        this.elements.proceedToCheckout().click();
    }

    enterCardDetails(cardDetails) {
        this.elements.nameOnCard().type(cardDetails.card_holder);
        this.elements.cardNumber().type(cardDetails.card_number);
        this.elements.expirationMonth().type(cardDetails.expiration_month);
        this.elements.expirationYear().type(cardDetails.expiration_year);
        this.elements.cvv().type(cardDetails.security_code);
    }

    clickPlaceOrder() {
        this.elements.placeOrder().click();
    }

    confirmOrder() {
        this.elements.payAndConfirmOrder().click();
    }

    verifyOrderPlaced() {
        this.elements.orderMessage().should('be.visible');
    }

    verifyProductList() {
        this.elements.productList().should('be.visible');
    }

    clickFirstViewButton() {
        this.elements.viewProductButtonList().first().click();
    }

    verifyPDP() {
        this.elements.productDetail().should('be.visible');
    }

    verifyProductImage() {
        this.elements.productImage().should('be.visible');
    }

    verifyProductName() {
        this.elements.productName().should('be.visible');
    }

    verifyProductAvailability() {
        this.elements.productAvailability().should('be.visible');
    }

    verifyProductCondition() {
        this.elements.productCondition().should('be.visible');
    }

    verifyProductBrand() {
        this.elements.productBrand().should('be.visible');
    }

    verifyPrice() {
        this.elements.price().should('be.visible');
    }

    verifyEmptyCartMessage(message) {
        this.elements.emptyCartMessage().contains(message);
    }

    emptyNameOnCard() {
        this.elements.nameOnCard().clear();
    }

    emptyCardNumber() {
        this.elements.cardNumber().clear();
    }

    emptyCVC() {
        this.elements.cvv().clear();
    }

    emptyExpirationMonth() {
        this.elements.expirationMonth().clear();
    }

    emptyExpirationYear() {
        this.elements.expirationYear().clear();
    }

    verifyMessage(field, message) {
        if (field.toLowerCase() === "name on card") {
            this.elements.nameOnCard().then(($input) => {
                expect($input[0].validationMessage).to.eq(message);
            });
        }
        else if (field.toLowerCase() === "card number") {
            this.elements.cardNumber().then(($input) => {
                expect($input[0].validationMessage).to.eq(message);
            });
        }
        else if (field.toLowerCase() === "cvc") {
            this.elements.cvv().then(($input) => {
                expect($input[0].validationMessage).to.eq(message);
            });
        }
        else if (field.toLowerCase() === "expiration month") {
            this.elements.expirationMonth().then(($input) => {
                expect($input[0].validationMessage).to.eq(message);
            });
        }
        else if (field.toLowerCase() === "expiration year") {
            this.elements.expirationYear().then(($input) => {
                expect($input[0].validationMessage).to.eq(message);
            });
        }
    }
}

module.exports = new ProductsPage();