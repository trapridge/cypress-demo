// @flow

import type { SetVisibilityAction } from '../actions'
import { VisibilityFilters } from '../actions'

export type State = $Values<typeof VisibilityFilters>

const visibilityFilter = (
  state: State = VisibilityFilters.SHOW_ALL,
  action: SetVisibilityAction
): State => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
