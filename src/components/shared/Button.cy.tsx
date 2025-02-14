/// <reference types="cypress" />
import 'cypress-real-events'; // Import cypress-real-events

import Button from './Button'; // Adjust the import based on your file structure

describe('Button Component', () => {
  it('should render with button text when not loading', () => {
    cy.mount(<Button isLoading={false}>Click Me</Button>); // Mount with text
    cy.get('button').should('contain.text', 'Click Me'); // Check text is displayed
    cy.get('.border-3.size-4').should('not.exist'); // Ensure spinner is not displayed
  });

  it('should show spinner when loading', () => {
    cy.mount(<Button isLoading={true}>Click Me</Button>); // Mount with loading state
    cy.get('.border-3.size-4').should('exist'); // Ensure spinner is visible
    cy.get('button').should('not.contain.text', 'Click Me'); // Ensure no text
  });

  it('should apply primary button styles by default', () => {
    cy.mount(<Button>Primary Button</Button>);
    cy.get('button')
      .should('have.class', 'bg-primary-400') // Check for primary button styles
      .and('have.class', 'hover:bg-primary-300');
  });

  it("should apply text button styles when buttonType is 'text'", () => {
    cy.mount(<Button buttonType="text">Text Button</Button>);
    cy.get('button')
      .should('have.class', 'border-primary-500') // Check for text button styles
      .and('have.class', 'bg-transparent');
  });

  it("should apply danger button styles when buttonType is 'danger'", () => {
    cy.mount(<Button buttonType="danger">Danger Button</Button>);
    cy.get('button')
      .should('have.class', 'bg-alert-error-500') // Check for danger button styles
      .and('have.class', 'text-white');
  });

  it('should be disabled when disabled prop is true', () => {
    cy.mount(<Button disabled={true}>Disabled Button</Button>);
    cy.get('button').should('have.class', 'pointer-events-none'); // Check for disabled button
    cy.get('button').should('have.class', 'cursor-not-allowed'); // Check for cursor style
    cy.get('button').should('have.class', 'opacity-60'); // Ensure opacity is reduced
    cy.get('button').should('not.be.enabled'); // Ensure button is disabled
  });

  it('should be disabled when isLoading prop is true', () => {
    cy.mount(<Button isLoading={true}>Loading Button</Button>);
    cy.get('button').should('have.class', 'pointer-events-none'); // Check for disabled button
    cy.get('button').should('have.class', 'cursor-not-allowed'); // Check for cursor style
    cy.get('button').should('have.class', 'opacity-60'); // Ensure opacity is reduced
    cy.get('button').should('not.be.enabled'); // Ensure button is disabled
  });

  it('should trigger onClick event when not loading and not disabled', () => {
    const clickSpy = cy.spy().as('clickSpy');
    cy.mount(<Button onClick={clickSpy}>Clickable Button</Button>);

    // Using real-events for a more realistic click simulation
    cy.get('button').realClick(); // Trigger real click event
    cy.get('@clickSpy').should('have.been.calledOnce'); // Ensure onClick was triggered
  });
});
