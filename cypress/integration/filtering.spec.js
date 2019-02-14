/* eslint-disable no-undef */

describe('filtering todos', () => {
  beforeEach(() => {
    cy.server()
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

  describe('initially', () => {
    it('filtering is set to all', () => {
      cy.get('#filter-all').should('be.disabled')
    })
  })

  describe('when filtered', () => {
    describe('to show only completed todos', () => {
      beforeEach(() => {
        cy.get('#filter-completed').click()
      })

      it('does not display active todo', () => {
        cy.get('#todo-0').should('not.be.visible')
      })

      it('displays completed todo', () => {
        cy.get('#todo-1').should('be.visible')
      })
    })

    describe('to show only active todos', () => {
      beforeEach(() => {
        cy.get('#filter-active').click()
      })

      it('displays first active', () => {
        cy.get('#todo-0').should('be.visible')
      })

      it('does not display completed todo', () => {
        cy.get('#todo-1').should('not.be.visible')
      })
    })
  })
})
