// @flow

import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Header = () => (
  <div>
    <FilterLink id="filter-all" filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink id="filter-active" filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink id="filter-completed" filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </div>
)

export default Header
