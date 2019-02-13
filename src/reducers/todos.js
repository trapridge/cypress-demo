// @flow

import type { Action, Todo } from '../actions'

export type State = {
  +todos: Todo[],
  +meta:
    | 'fetching'
    | 'fetchError'
    | 'adding'
    | 'addError'
    | 'toggling'
    | 'toggleError'
    | void,
}

const todos = (
  state: State = { todos: [], meta: undefined },
  action: Action
): State => {
  switch (action.type) {
    case 'FETCH_ALL_REQUEST':
      return {
        ...state,
        meta: 'fetching',
      }
    case 'FETCH_ALL_SUCCESS':
      return {
        ...state,
        todos: action.payload,
        meta: undefined,
      }
    case 'FETCH_ALL_FAILURE':
      return {
        ...state,
        meta: 'fetchError',
      }
    case 'ADD_REQUEST':
      return {
        ...state,
        meta: 'adding',
      }
    case 'ADD_SUCCESS':
      return {
        ...state,
        todos: action.payload,
        meta: undefined,
      }
    case 'ADD_FAILURE':
      return {
        ...state,
        meta: 'addError',
      }
    case 'TOGGLE_REQUEST':
      return {
        ...state,
        meta: 'toggling',
      }
    case 'TOGGLE_SUCCESS':
      return {
        ...state,
        todos: state.todos.map(todo =>
          // $FlowFixMe
          action.payload && todo.id === action.payload.id
            ? // $FlowFixMe
              action.payload
            : todo
        ),
        meta: undefined,
      }
    case 'TOGGLE_FAILURE':
      return {
        ...state,
        meta: 'toggleError',
      }
    default:
      return state
  }
}

export default todos
