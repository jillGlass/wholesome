import React from 'react'
import { connect } from 'react-redux'
import { fetchPrompts } from '../actions/index'

class Content extends React.Component {
  state = {
    num: 1
  }

handleClick = () => {
  this.setState({
    num: this.state.num + 1
  }, () => this.props.dispatch(fetchPrompts(this.state.num)))
}

render () {
  // const { fetchPrompts } = this.props

  console.log(this.props.prompt)
  return (
      <>
      <div className="container">
        <ul>
          {this.props.prompt.map(item => {
            return <li key={item.id}>{item.promptItem}</li>
          })}
        </ul>
        <p>{this.props.prompt.promptItem}</p>
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
