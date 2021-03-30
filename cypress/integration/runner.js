describe('Poll-Everywhere Test', () => {
  it('Logging in', () => {
		cy.visit('https://pollev.com/johnquinn354')

		cy.get('input').type('jquinn13')

		cy.contains('Continue').click()

		cy.get('button.component-response-multiple-choice__option', { timeout: 3600000 }).should('not.be.disabled').first().click()
  })
})
