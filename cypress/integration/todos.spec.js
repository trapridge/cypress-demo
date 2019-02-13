/* eslint-disable no-undef */

describe('todos', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      url: '/api/todos',
      method: 'GET',
      response: [],
      status: 200,
    }).as('fetchTodos')
    cy.visit('/', {
      onBeforeLoad: win => {
        win.fetch = null
      },
    })
  })

  describe('initially', () => {
    beforeEach(() => {
      cy.wait('@fetchTodos')
    })

    it('displays something', () => {
      cy.get('#no-todos-indicator').should('be.visible')
    })
  })
})
