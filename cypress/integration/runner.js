const POLL_URL = 'https://pollev.com/<POLL_ID>';
const USERNAME = '<USERNAME>';
const TIMEOUT  = 3600000; // Timeout in milliseconds (class duration with buffer)

describe('Poll-Everywhere Test', () => {
  it('Logging in', () => {
		cy.visit(POLL_URL)
		cy.log('Visited', POLL_URL)

		cy.get('input').type(USERNAME)
		cy.log('Typed in username', USERNAME)

		cy.contains('Continue').click()
		cy.log('Clicking Continue')

		cy.get('button.component-response-multiple-choice__option', { timeout: TIMEOUT }).should('not.be.disabled').first().click()
		cy.log('Submitting First Option')
		cy.log('Task Completed')
  })
})
