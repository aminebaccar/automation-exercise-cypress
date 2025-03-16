# Automation Exercise - Cypress

[![Cypress](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

This project is an automated test suite for [Automation Exercise](https://automationexercise.com/) using Cypress. It includes end-to-end (E2E) tests to validate key functionalities of the website. The project follows the Page Object Model (POM) pattern to enhance maintainability and reusability.

## 📌 Project Structure

```
automation-exercise-cypress/
│── cypress/
│   ├── fixtures/       # Test data
│   ├── e2e/
│   │   ├── features/           # Test cases in BDD
│   │   └── step_definitions/   # Step definitions for BDD steps
│   ├── pages/          # Page Object Model (POM) structure
│── cypress.json        # Cypress configuration
│── package.json        # Project dependencies
│── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS recommended)

### Installation

Clone the repository:
```sh
git clone https://github.com/aminebaccar/automation-exercise-cypress.git
cd automation-exercise-cypress
```

Install dependencies:
```sh
npm install
```

### Running Tests

To run Cypress tests in headless mode:
```sh
npm run run
```

To open Cypress Test Runner:
```sh
npm run open
```

## 📊 Test Reports

This project uses [Multiple Cucumber HTML Reporter](https://www.npmjs.com/package/multiple-cucumber-html-reporter) to generate detailed and visually appealing test reports.

To generate and view a detailed and comprehensive test report using Multiple Cucumber HTML Reporter:
```sh
node cypress.report.js
```
Reports will be available in the `cypress/reports` directory.

## 📝 Contributing

To contribute to this project, contact me by email.

---

**Author:** [Amine Baccar](https://github.com/aminebaccar)
