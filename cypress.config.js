const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.REACT_APP_BASE_URL,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
