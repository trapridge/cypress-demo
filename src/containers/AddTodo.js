// @flow

import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import styles from './AddTodo.module.css'

type DispatchProps = {
  addTodo: *
}

type Props = {| ...$Exact<DispatchProps> |}

const AddTodo = ({ addTodo }: Props) => {
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
            addTodo({ text: input.value, completed: false })
            input.value = ''
          }
        }}
      >
        <input
          placeholder="Type todo..."
          className={styles.input}
          ref={node => (input = node)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo))
})

export default connect<Props, {}, _, _, _, _>(null, mapDispatchToProps)(AddTodo)
