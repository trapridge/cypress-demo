// @flow

import React from 'react'
import { toggleTodo } from '../actions'

type Props = {
  onClick: typeof toggleTodo,
  completed: boolean,
  text: string,
}

const Todo = ({ onClick, completed, text }: Props) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    {text}
  </li>
)

export default Todo
