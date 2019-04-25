import React from 'react'

function Header() {
  return (
    <header style={header}>
      <h1 style={{textDecoration: 'underline', marginBottom: '1rem'}}>Todo List</h1>
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
