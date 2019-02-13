// @flow

import React from 'react'
import { toggleTodo } from '../actions'
import Todo from './Todo'
import styles from './TodoList.module.css'

export type Props = {
  todos: Array<{
    id: number,
    completed: boolean,
    text: string,
  }>,
  toggleTodo: typeof toggleTodo,
}

const TodoList = ({ todos, toggleTodo }: Props) => (
  <ul className={styles.list}>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
)

export default TodoList
