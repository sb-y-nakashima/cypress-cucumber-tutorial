import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given(`google.comにアクセスする`, () => {
    cy.visit("https://google.com")
});

Then(`タイトルにGoogleがある`, () => {
    cy.title().should("include", "Google")
});