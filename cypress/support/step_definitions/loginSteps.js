import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from '../pageObjects/LoginPage';

const loginPage = new LoginPage();

Given('que estou na página de login', () => {
  loginPage.visit();
});

When('preencho usuário e senha válidos', () => {
  loginPage.fillUsername('standard_user');
  loginPage.fillPassword('secret_sauce');
});

When('clico em login', () => {
  loginPage.submit();
});

Then('vejo a página inicial', () => {
  cy.url().should('include', '/inventory');
});