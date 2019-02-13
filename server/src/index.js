// @flow

const express = require('express')
const bodyParser = require('body-parser')
const delay = require('express-delay')

const app = express()
const port = 3001

let id = 0
let todos = []

app.use(bodyParser.json())
app.use(delay(500))

app.get('/api/todos', function(req, res) {
  console.log('Fetched all todos')
  res.send(todos)
})

app.post('/api/todos', function(req, res) {
  todos = [{ id: id++, ...req.body }, ...todos]
  console.log('Added new todo')
  res.send(todos)
})

app.get('/api/todos/:id', function(req, res) {
  const found = todos.find(({ id }) => id.toString() === req.params.id)
  if (found) {
    console.log(`Fetched todo ${req.params.id}`)
    res.send(found)
  } else {
    res.sendStatus(404)
  }
})

app.patch('/api/todos/:id', function(req, res) {
  if (todos.filter(({ id }) => id.toString() === req.params.id).length > 0) {
    todos = todos.map(todo =>
      req.params.id === todo.id.toString() ? { ...todo, ...req.body } : todo
    )
    console.log(`Updated todo ${req.params.id}`)
    res.send(todos.find(({ id }) => id.toString() === req.params.id))
  } else {
    res.sendStatus(404)
  }
})

app.listen(port, () => console.log(`Todo server listening at port ${port}`))
