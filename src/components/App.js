// @flow

import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import styles from './App.module.css'

const App = () => (
  <div className={styles.container}>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
