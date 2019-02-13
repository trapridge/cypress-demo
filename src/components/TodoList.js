// @flow

import React, { Component, type Element } from 'react'
import { toggleTodo, type Todo as TodoType } from '../actions'
import Todo from './Todo'
import styles from './TodoList.module.css'

export type Props = {
  todos: TodoType[],
  toggleTodo: TodoType => *,
  fetchAllTodos: () => *,
  isLoading: boolean,
}

class TodoList extends Component<Props> {
  componentDidMount(): void {
    this.props.fetchAllTodos()
  }

  render(): Element<'ul'> {
    const { todos, toggleTodo, isLoading } = this.props

    return (
      <ul className={styles.list}>
        {isLoading ? (
          <li>Loading todos...</li>
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
