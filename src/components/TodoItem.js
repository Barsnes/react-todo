import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {

  getStyle = () => {
    return {
      padding: '1rem',
      borderBottom: '1px solid #ccc',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {

    const { id, title, completed } = this.props.todo

    return (
      <div style={ this.getStyle() }>
        <p>
          <input
            style={{marginRight: '.5rem'}}
            type="checkbox"
            checked={ completed }
            onChange={this.props.updateComplete.bind(this, id)}
          />

          { title }

          <button style={btnStyle} onClick={this.props.removeTodo.bind(this, id)}>Remove</button>
        </p>
      </div>
    )
  }
}

const btnStyle = {
  backgroundColor: "red",
  padding: '.2rem',
  color: "#FFF",
  border: 'none',
  marginLeft: '4rem',
  borderRadius: '3px'
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem
