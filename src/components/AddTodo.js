import React, { Component } from 'react'

class AddTodo extends Component {

  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state.title)
    this.setState({ title: '' })
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value })

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        style={formField}
        autocomplete="off"
      >
        <input
          type='text'
          name='title'
          required
          style={inputField}
          placeholder="Add Todo"
          value={this.state.title}
          onChange={this.onChange}
        />

        <input
          type="submit"
          value="Submit"
          className="btn"
        />
      </form>
    )
  }
}

const formField = {
  display: 'grid',
  padding: '1rem 5rem',
  gridTemplateColumns: '1fr 6rem'
}

const inputField = {
  margin: '.5rem 0',
  border: '1px solid #ffffff',
  borderRadius: '5px',
  padding: '.5rem'
}

export default AddTodo
