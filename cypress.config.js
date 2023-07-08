const {defineConfig} = require("cypress");

module.exports = defineConfig({
    e2e: {
        defaultCommandTimeout: 5000,
        testIsolation: true,
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
