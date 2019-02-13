// @flow

import { connect } from 'react-redux'
import { fetchAllTodos, toggleTodo } from '../actions'
import TodoList, { type Props } from '../components/TodoList'
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos.todos, state.visibilityFilter),
  isFetching: state.todos.meta === 'fetching',
  hasError:
    state.todos.meta === 'fetchError' || state.todos.meta === 'addError',
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: todo => dispatch(toggleTodo(todo)),
  fetchAllTodos: () => dispatch(fetchAllTodos()),
})

export default connect<$Exact<Props>, {||}, _, _, _, _>(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
