import React from 'react';
import { mount } from 'cypress/react';
import TopBar from './TopBar'; // Adjust the import path as needed

describe('<TopBar /> Component', () => {
  beforeEach(() => {
    mount(<TopBar />);
  });

  it('should render the GamerShop button with correct text', () => {
    cy.contains('GamerShop').should('be.visible');
  });

  it('should render the GamerShop button as a link to /shopping-cart', () => {
    cy.get('a[href="/shopping-cart"]').should('exist');
  });

  it('should render the shopping cart icon', () => {
    cy.get('svg').should('exist').and('have.class', 'text-primary-400');
  });
});
