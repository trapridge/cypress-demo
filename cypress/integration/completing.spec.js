/* eslint-disable no-undef */

describe('un/completing a todo', () => {
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

  describe('when completing a todo', () => {
    beforeEach(() => {
      cy.route({
        url: '/api/todos/0',
        method: 'PATCH',
        response: { id: '0', text: 'text', completed: true },
        status: 200,
      }).as('patchTodo')
      cy.get('#todo-0').click()
      cy.wait('@patchTodo')
    })

    it('adds line-through to it', () => {
      cy.get('#todo-0').should('have.css', 'text-decoration', 'line-through solid rgb(0, 0, 0)')
    })
  })

  describe('when uncompleting a todo', () => {
    beforeEach(() => {
      cy.route({
        url: '/api/todos/1',
        method: 'PATCH',
        response: { id: '1', text: 'text', completed: false },
        status: 200,
      }).as('patchTodo')
      cy.get('#todo-1').click()
      cy.wait('@patchTodo')
    })

    it('removes line-through from it', () => {
      cy.get('#todo-1').should('not.have.css', 'text-decoration', 'line-through solid rgb(0, 0, 0)')
    })
  })
})
