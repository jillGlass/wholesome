import React from 'react'
import { connect } from 'react-redux'
import { fetchPrompts } from '../actions/index'

export class Content extends React.Component {
  state = {
    num: 1
  }

handleClick = () => {
  // Num total is 20 in database
  Number(this.state.num) < 20 ? this.setState({
    num: this.state.num + 1
  })
    : this.setState({
      num: 1
    })
}

render () {
  const { fetchPrompts, promptItem } = this.props
  return (
    <div className="content">
      <div>
        <button onClick={() => { this.handleClick(); fetchPrompts(this.state.num) }}>Next</button>
        <p>{promptItem}</p>
      </div>
    </div>
  )
}
}

const mapStateToProps = (state) => {
  return {
    promptItem: state.prompt.promptItem
  }
}

// If don't use mapDispatchToProps, use this.props.dispatch(fetchPrompts(this.state.num)
const mapDispatchToProps = dispatch => ({
  fetchPrompts: (num) => dispatch(fetchPrompts(num))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content)
