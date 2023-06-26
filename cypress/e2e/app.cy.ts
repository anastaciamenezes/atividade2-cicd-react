describe('Balldontlie E2E tests', () => {
  beforeEach(() => {
    cy.visit('')
    cy.fixture('apiResponse').then((value) => (this.apiResponse = value))
  })

  it('should render correct number of players cards when search is performed', () => {
    const query = 'mike'
    cy.intercept('GET', `${Cypress.env('API_URL')}/${query}`, {
      body: this.apiResponse,
    })
    cy.performSearch(query)
    
    it('should n players to list after n clicks to view person button', () => {
      const n = 10
      cy.contains['Mike'].click(n)
      //cy.get('[data-cy="player-panel"]').find('li').should('have.length', n)
      cy.get('[data-cy="details-title"]').find('li').should('have.length', n)
    })
  })
})