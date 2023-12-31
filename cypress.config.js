const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'http://localhost:3000',
    retries: {
      runMode: 1,
      openMode: 1,
    },
    viewportWidth: 500,
    viewportHeight: 500,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
