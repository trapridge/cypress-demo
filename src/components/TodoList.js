// @flow

import React, { Component, type Element } from 'react'
import { toggleTodo, type Todo as TodoType } from '../actions'
import Todo from './Todo'
import styles from './TodoList.module.css'

export type Props = {
  todos: TodoType[],
  toggleTodo: TodoType => *,
  fetchAllTodos: () => *,
  isFetching: boolean,
  hasError: boolean,
}

class TodoList extends Component<Props> {
  componentDidMount(): void {
    this.props.fetchAllTodos()
  }

  render(): Element<'ul'> {
    const { todos, toggleTodo, isFetching, hasError } = this.props

    return (
      <ul className={styles.list}>
        {isFetching && <li id="loading-indicator">Loading todos...</li>}
        {hasError && <li id="error-indicator">Cannot load todos...</li>}
        {!isFetching && !hasError && todos.length === 0 ? (
          <li id="no-todos-indicator">No todos yet</li>
        ) : (
          todos.map(todo => (
            <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo)} />
          ))
        )}
      </ul>
    )
  }
}

export default TodoList
