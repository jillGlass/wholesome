// sticky footer with copy: "HAVE I EVER"
// black background with white copy in caps

// use the below class names for the header, which is basically a nav bar. INSTEAD OF BURGER   i think we need to use nav-center
import React from 'react'

class Footer extends React.Component {
  render () {
    return (
      <nav>
        <div className="sticky">
          <div className="navigation">
            <h1 className="title">HAVE I EVER</h1>
          </div>
        </div>
      </nav>

    )
  }
}

export default Footer
