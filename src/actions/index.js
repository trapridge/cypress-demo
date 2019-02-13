// @flow

import { type Dispatch } from 'redux'
import 'whatwg-fetch'

export type Todo = {
  id: string,
  text: string,
  completed: boolean,
}

export const VisibilityFilters = Object.freeze({
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
})

export type SetVisibilityAction = {
  type: 'SET_VISIBILITY_FILTER',
  filter: $Values<typeof VisibilityFilters>,
}

export type FetchAllRequestAction = {
  type: 'FETCH_ALL_REQUEST',
}

export type FetchAllSuccessAction = {
  type: 'FETCH_ALL_SUCCESS',
  payload: Todo[],
}

export type FetchAllFailureAction = {
  type: 'FETCH_ALL_FAILURE',
}

export type FetchAllAction =
  | FetchAllRequestAction
  | FetchAllSuccessAction
  | FetchAllFailureAction

export type ToggleRequestAction = {
  type: 'TOGGLE_REQUEST',
}

export type ToggleSuccessAction = {
  type: 'TOGGLE_SUCCESS',
  payload: Todo,
}

export type ToggleFailureAction = {
  type: 'TOGGLE_FAILURE',
}

export type ToggleAction =
  | ToggleRequestAction
  | ToggleSuccessAction
  | ToggleFailureAction

export type AddRequestAction = {
  type: 'ADD_REQUEST',
}

export type AddSuccessAction = {
  type: 'ADD_SUCCESS',
  payload: Todo[],
}

export type AddFailureAction = {
  type: 'ADD_FAILURE',
}

export type AddAction = AddRequestAction | AddSuccessAction | AddFailureAction

export type Action =
  | FetchAllAction
  | ToggleAction
  | AddAction
  | SetVisibilityAction

export const setVisibilityFilter = (
  filter: $Values<typeof VisibilityFilters>
): SetVisibilityAction => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
})

export const fetchAllTodos = () => async (
  dispatch: Dispatch<FetchAllAction>
): Promise<void> => {
  dispatch({ type: 'FETCH_ALL_REQUEST' })
  try {
    const response = await fetch('/api/todos')
    if (response.ok) {
      const todos = await response.json()
      dispatch({ type: 'FETCH_ALL_SUCCESS', payload: todos })
      return
    }
  } catch (error) {}
  dispatch({ type: 'FETCH_ALL_FAILURE' })
}

export const toggleTodo = (todo: Todo) => async (
  dispatch: Dispatch<ToggleAction>
): Promise<void> => {
  dispatch({ type: 'TOGGLE_REQUEST' })
  try {
    const response = await fetch(`/api/todos/${todo.id}`, {
      method: 'PATCH',
      body: JSON.stringify({ completed: !todo.completed }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (response.ok) {
      const todo = await response.json()
      dispatch({ type: 'TOGGLE_SUCCESS', payload: todo })
      return
    }
  } catch (error) {}
  dispatch({ type: 'TOGGLE_FAILURE' })
}

export const addTodo = (todo: $Diff<Todo, { id: string }>) => async (
  dispatch: Dispatch<AddAction>
): Promise<void> => {
  dispatch({ type: 'ADD_REQUEST' })
  try {
    const response = await fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (response.ok) {
      const todos = await response.json()
      dispatch({ type: 'ADD_SUCCESS', payload: todos })
      return
    }
  } catch (error) {}
  dispatch({ type: 'ADD_FAILURE' })
}
