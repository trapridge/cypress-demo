/* eslint-disable no-undef */

describe('adding a todo', () => {
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

  describe('when adding a new todo', () => {
    const text = 'eat & drink'

    beforeEach(() => {
      cy.route({
        url: '/api/todos',
        method: 'POST',
        response: [
          { id: '0', text: 'text', completed: false },
          { id: '1', text: 'text2', completed: true },
          { id: '2', text, completed: false },
        ],
        status: 200,
      }).as('addTodo')
      cy.get('#input-field').type('eat')
      cy.get('#add-button').click()
      cy.wait('@addTodo')
    })

    it('displays newly added todo', () => {
      cy.get('#todo-2').should('contain', text)
    })

    it('empties input field', () => {
      cy.get('#input-field').should('contain', '')
    })
  })
})
