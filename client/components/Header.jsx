// use the below class names for the header, which is basically a nav bar. INSTEAD OF BURGER   i think we need to use nav-center
import React from 'react'

class Header extends React.Component {
  render () {
    return (
      <nav>
        <ul className="navigation">
          <div className="nav-right">
            <h1 className="burger">NEVER</h1>
          
          </div>
        </ul>
      </nav>

    )
  }
}

export default Header
