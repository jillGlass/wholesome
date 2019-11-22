import React from 'react'
import { connect } from 'react-redux'
import { fetchPrompts } from '../actions/index'

class Content extends React.Component {
handleClick = () => {
  this.props.dispatch(fetchPrompts('1'))
}

render () {
  // const { fetchPrompts } = this.props

  return (
      <>
      <div className="container">
        <p>xxxxx</p>
        <button onClick={this.handleClick}>Next</button>
      </div>
      </>
  )
}
}

const mapStateToProps = (state) => {
  return {
    prompt: state.prompt
  }
}

export default connect(
  mapStateToProps
)(Content)

// question - loading symbol/api - question - repeat. On wait/timer 10seconds
// use thunk/redux for this.
