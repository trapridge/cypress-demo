// @flow

import React, { type Node } from 'react'
import { setVisibilityFilter } from '../actions'
import styles from './Link.module.css'

export type Props = {
  active: boolean,
  children: Node,
  onClick: typeof setVisibilityFilter,
}

const Link = ({ active, children, onClick }: Props) => (
  <button onClick={onClick} disabled={active} className={styles.button}>
    {children}
  </button>
)

export default Link
