import 'cypress-real-events'; // Import the plugin
import ShortText from './ShortText';

describe('ShortText Component', () => {
  beforeEach(() => {
    cy.mount(
      <ShortText
        text="HyperText Markup Language"
        maxLength={5}
        className="short-text"
      />
    );
  });

  it('should show full text on real hover', () => {
    cy.get('.short-text').realHover(); // Use real hover

    cy.get('.absolute', { timeout: 5000 })
      .should('be.visible')
      .and('contain.text', 'HyperText Markup Language');
  });

  it('should hide full text when mouse leaves', () => {
    cy.get('.short-text').realHover();

    cy.get('.absolute', { timeout: 5000 }).should('be.visible');

    cy.get('.short-text').trigger('mouseleave');

    cy.get('.absolute').should('not.exist');
  });
});
