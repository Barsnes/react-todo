import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import uuid from 'uuid'

import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'

import './App.css';

class App extends Component {

  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'First todo',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Second todo',
        completed: true
      },
      {
        id: uuid.v4(),
        title: 'Third todo',
        completed: true
      }
    ]
  }

  updateComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
  })
  }

  removeTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]
  })
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
      <Router>

        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    updateComplete={this.updateComplete}
                    removeTodo={this.removeTodo}
                  />
                </React.Fragment>
              )} />

            <Route path="/about" component={About}/>
          </div>
        </div>

      </Router>
    );
  }
}

export default App;
