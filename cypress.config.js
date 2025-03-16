const { defineConfig } = require('cypress');
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin, afterRunHandler, } = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const fs = require("fs");

module.exports = defineConfig({
    e2e: {
        async setupNodeEvents(on, config) {
            const bundler = createBundler({
                plugins: [createEsbuildPlugin(config)],
            });
            on("file:preprocessor", bundler);
            await addCucumberPreprocessorPlugin(on, config, {
                omitAfterRunHandler: true,
            });
            on("after:run", async (results) => {
                if (results) {
                    await afterRunHandler(config);
                    fs.writeFileSync(
                        "cypress/reports/results.json",
                        JSON.stringify(
                            {
                                browserName: results.browserName,
                                browserVersion: results.browserVersion,
                                osName: results.osName,
                                osVersion: results.osVersion,
                                nodeVersion: results.config.resolvedNodeVersion,
                                cypressVersion: results.cypressVersion,
                                startedTestsAt: results.startedTestsAt,
                                endedTestsAt: results.endedTestsAt,
                            },
                            null,
                            "\t"
                        )
                    );
                }
            });
            return config;
        },
        viewportWidth: 1280,
        viewportHeight: 720,
        specPattern: "cypress/e2e/features/**/*.feature",
        supportFile: "cypress/support/e2e.js",
        baseUrl: 'https://www.automationexercise.com/',
        defaultCommandTimeout: 10000,
        chromeWebSecurity: false,
        video: true,
        retries: 2,
    },
})