/* eslint-disable no-undef */
<reference types="cypress" />
// import React from 'react';

describe('Listy App Legacy Refactor', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it('should display the log in screen', () => {
    cy.get('.signup-button').should('have.length', 1);
    cy.get('.login-button').should('have.length', 1);
  })

  it('should click log in, create a post, like, and delete', () => {
    cy.get('.login-button').click();
    cy.origin('https://listy.us.auth0.com/', () => {
      // cy.get('.input cfd3df4a1 c36ecf762').type('Coders');
      cy.get("#username").type("matt");
      cy.get("input[type='password']").type("Testing_11");
      cy.get("button[type='submit']").contains(/^Continue$/).click();
    });
    cy.get('.logout-button').should('have.length', 1);
    cy.get('.profile-logo').click();
    cy.get('.add-logo').click();
    cy.get('input[name="name"]').type("fun movie");
    cy.get('input[name="rating"]').type("10/10");
    cy.get('input[name="genre"').type("coding thriller");
    cy.get('.post-modal').click();
    cy.get('.close-modal').click();
    cy.get('.delete-button').click();
  })

  // it('should create a post', () => {
  //   cy.get('.login-button').click();
  //   cy.origin('https://listy.us.auth0.com/', () => {
  //     // cy.get('.input cfd3df4a1 c36ecf762').type('Coders');
  //     cy.get("#username").type("matt");
  //     cy.get("input[type='password']").type("Testing_11");
  //     cy.get("button[type='submit']").contains(/^Continue$/).click();
  //   });
  //   cy.get(".addPopup")
  // })


})