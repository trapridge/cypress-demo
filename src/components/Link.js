// @flow

import React, { type Node } from 'react'
import { setVisibilityFilter } from '../actions'
import styles from './Link.module.css'

export type Props = {
  active: boolean,
  children: Node,
  onClick: typeof setVisibilityFilter,
  id: string,
}

const Link = ({ active, children, onClick, id }: Props) => (
  <button id={id} onClick={onClick} disabled={active} className={styles.button}>
    {children}
  </button>
)

export default Link
