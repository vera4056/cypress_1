const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  viewportWidth: 1000,
  viewportHeight: 600,

  component: {
    viewportWidth: 500,
    viewportHeight:500,
  },

  e2e: {
    baseUrl:'http://localhost:3000',
    //defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
