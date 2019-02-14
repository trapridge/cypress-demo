/* eslint-disable no-undef */

describe('fetching todos', () => {
  beforeEach(() => {
    cy.server()
  })

  describe('initially', () => {
    describe('when server responds with no todos', () => {
      beforeEach(() => {
        cy.route({
          url: '/api/todos',
          method: 'GET',
          response: [],
          status: 200,
        }).as('fetchTodos')
        cy.goTo('/')
        cy.wait('@fetchTodos')
      })

      it('displays status message', () => {
        cy.get('#no-todos-indicator').should('be.visible')
      })
    })

    describe('when server responds with non-OK response', () => {
      beforeEach(() => {
        cy.route({
          url: '/api/todos',
          method: 'GET',
          response: [],
          status: 404,
        }).as('fetchTodos')
        cy.goTo('/')
        cy.wait('@fetchTodos')
      })

      it('displays error message', () => {
        cy.get('#error-indicator').should('be.visible')
      })
    })

    describe('when server responds with todos', () => {
      beforeEach(() => {
        cy.route({
          url: '/api/todos',
          method: 'GET',
          response: [
            { id: '0', text: 'text', completed: false },
            { id: '1', text: 'text2', completed: true },
          ],
          status: 200,
        }).as('fetchTodos')
        cy.goTo('/')
        cy.wait('@fetchTodos')
      })

      it('displays first todo', () => {
        cy.get('#todo-0').should('be.visible')
      })

      it('displays second todo', () => {
        cy.get('#todo-1').should('be.visible')
      })
    })
  })
})
