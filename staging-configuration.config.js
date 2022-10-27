const { defineConfig } = require("cypress");

module.exports = defineConfig({
  extends: "./cypress.config.js",

  e2e: {
    baseUrl: "https://petstore.swagger.io/v2",    
    baseUrlUI: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
