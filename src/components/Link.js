// @flow

import React, { type Node } from 'react'
import { setVisibilityFilter } from '../actions'

export type Props = {
  active: boolean,
  children: Node,
  onClick: typeof setVisibilityFilter,
}

const Link = ({ active, children, onClick }: Props) => (
  <button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px',
    }}
  >
    {children}
  </button>
)

export default Link
