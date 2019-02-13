// @flow

import React from 'react'
import { connect } from 'react-redux'
import { type Dispatch } from 'redux'
import { addTodo, type AddTodoAction } from '../actions'
import styles from './AddTodo.module.css';

type Props = {
  dispatch: Dispatch<AddTodoAction>,
}

const AddTodo = ({ dispatch }: Props) => {
  let input: ?HTMLInputElement

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (input) {
            if (!input.value.trim()) {
              return
            }
            dispatch(addTodo(input.value))
            input.value = ''
          }
        }}
      >
        <input placeholder="Type todo..." className={styles.input} ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default connect<Props, {}, Props, _, _, _>()(AddTodo)
