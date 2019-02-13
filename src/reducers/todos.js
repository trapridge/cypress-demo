// @flow

import type { AddTodoAction, ToggleTodoAction } from '../actions'

export type State = Array<{|
  +id: number,
  +text: string,
  +completed: boolean,
|}>

const todos = (
  state: State = [],
  action: AddTodoAction | ToggleTodoAction
): State => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
        ...state
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    default:
      return state
  }
}

export default todos
