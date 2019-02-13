// @flow

let nextTodoId = 0

export const VisibilityFilters = Object.freeze({
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
})

export type AddTodoAction = {
  type: 'ADD_TODO',
  id: number,
  text: string,
}

export type ToggleTodoAction = {
  type: 'TOGGLE_TODO',
  id: number,
}

export type SetVisibilityAction = {
  type: 'SET_VISIBILITY_FILTER',
  filter: $Values<typeof VisibilityFilters>,
}

export type Action = AddTodoAction | ToggleTodoAction | SetVisibilityAction

export const addTodo = (text: string): AddTodoAction => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text,
})

export const toggleTodo = (id: number): ToggleTodoAction => ({
  type: 'TOGGLE_TODO',
  id,
})

export const setVisibilityFilter = (
  filter: $Values<typeof VisibilityFilters>
): SetVisibilityAction => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
})
