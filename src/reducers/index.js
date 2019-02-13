// @flow

import { combineReducers } from 'redux'
import type { Action } from '../actions'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers<_, Action>({
  todos,
  visibilityFilter,
})
