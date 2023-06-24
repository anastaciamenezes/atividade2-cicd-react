describe('Balldontlie E2E tests', () => {
  beforeEach(() => {
    cy.visit('')
    cy.fixture('apiResponse').then((value) => (this.apiResponse = value))
  })

  it('should render correct number of players cards when search is performed', () => {
    const query = 'games'
    cy.intercept('GET', `${Cypress.env('API_URL')}/${query}`, {
      body: this.apiResponse,
    })
  })  

    it.only('should show correct meanings about a player', () => {
    })
  })