import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header style={header}>
      <h1 style={{textDecoration: 'underline', marginBottom: '1rem'}}>Todo List</h1>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
    </header>
  )
}

const header = {
  textAlign: 'center',
  paddingBottom: '2rem',
  paddingTop: '2rem',
  backgroundColor: '#ffffff15'
}

export default Header
