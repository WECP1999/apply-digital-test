/// <reference types="cypress" />
import { Game } from '@/utils/endpoint';
import CardProduct from './CardProduct';
import cartStore from '@/store/cart';
import 'cypress-real-events';

describe('CardProduct Component with Real Events', () => {
  const mockGame: Game = {
    id: '1',
    name: 'Test Game',
    genre: 'Action',
    image: '/public/game-images/ageofempiresII.jpeg',
    price: 49.99,
    isNew: false,
    description: 'Test Game',
  };

  let mockCartStore: any;

  beforeEach(() => {
    // Create a mock store and spy on the functions
    mockCartStore = {
      games: [], // Start with an empty cart
      setGame: cy.stub().as('setGame'), // Spy on setGame
      deleteGame: cy.stub().as('deleteGame'), // Spy on deleteGame
    };

    // Mock cartStore in your test to use the above mockCartStore
    cy.stub(cartStore, 'getState').returns(mockCartStore);
    cy.mount(<CardProduct game={mockGame} />);
  });

  it('should render game details correctly', () => {
    // Check the genre text
    cy.get('.text-neutral-500').should('contain.text', mockGame.genre);

    // Check the game name with ShortText
    cy.get('.text-lg').should('contain.text', mockGame.name);

    // Check the price is rendered correctly
    cy.get('.text-xl').should('contain.text', '$49.99'); // Assuming parseToCurrency works
  });

  it('should show "add to cart" button when game is not in the cart', () => {
    // Check if the "add to cart" button is displayed
    cy.get('button').contains('add to cart').should('be.visible');

    // Use realClick from cypress-real-events to simulate a realistic click
    cy.get('button').contains('add to cart').realClick();

    // Ensure the setGame function was called
    cy.get('@setGame').should('have.been.calledWith', mockGame);
  });

  it('should show "remove" button when game is in the cart', () => {
    // Update the cart store to include the game
    mockCartStore.games = [mockGame];

    // Re-mount the component to reflect the updated cart state
    cy.mount(<CardProduct game={mockGame} />);

    // Check if the "remove" button is displayed
    cy.get('button').contains('remove').should('be.visible');

    // Use realClick from cypress-real-events to simulate a realistic click
    cy.get('button').contains('remove').realClick();

    // Ensure the deleteGame function was called
    cy.get('@deleteGame').should('have.been.calledWith', mockGame.id);
  });
});
