// @flow

import React from 'react'
import { toggleTodo } from '../actions'

type Props = {
  onClick: typeof toggleTodo,
  completed: boolean,
  text: string,
  id: string,
}

const Todo = ({ onClick, completed, text, id }: Props) => (
  <li
    id={`todo-${id}`}
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    {text}
  </li>
)

export default Todo
