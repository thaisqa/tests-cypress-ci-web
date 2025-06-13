const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      require('cypress-mochawesome-reporter/plugin')(on); 
      return config;
    },
    specPattern: 'cypress/e2e/features/**/*.feature',
    cucumber: {
      stepDefinitions: [
        "cypress/support/step_definitions/**/*.js"
      ]
    },
    reporter: 'cypress-mochawesome-reporter', 
    reporterOptions: {                       
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true
    }
  },
});