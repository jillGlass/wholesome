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
      <div className="content">
        <ul style ={{ listStyle: 'none' }} >
          {this.props.prompt.map(item => {
            return <li style ={{ textDecoration: 'none' }} key={item.id}>{item.promptItem} <button onClick={this.handleClick}>Next</button></li>
          })}
        </ul>
        <button onClick={this.handleClick}>Next</button>
        <p>{this.props.prompt.promptItem}</p>
        
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

