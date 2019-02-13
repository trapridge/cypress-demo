// @flow

import React from 'react'
import Header from './Header'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import styles from './App.module.css'

const App = () => (
  <div className={styles.container}>
    <Header />
    <AddTodo />
    <VisibleTodoList />
  </div>
)

export default App
