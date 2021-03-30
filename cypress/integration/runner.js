const POLL_URL = 'https://pollev.com/<POLL_ID>';
const USERNAME = '<USERNAME>';
const TIMEOUT  = 3600000; // Timeout in milliseconds (class duration with buffer)

describe('Poll-Everywhere Test', () => {
  it('Logging in', () => {
		cy.visit(POLL_URL)

		cy.get('input').type(USERNAME)

		cy.contains('Continue').click()

		cy.get('button.component-response-multiple-choice__option', { timeout: TIMEOUT }).should('not.be.disabled').first().click()
  })
})
