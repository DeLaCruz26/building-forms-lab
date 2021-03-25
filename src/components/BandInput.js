// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'


class BandInput extends Component {

  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
            <label>Add Band: </label>
            <input onChange={(event) => this.handleChange(event)} type="text"/>
            <input type='submit'/>
          </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return{
    addBand: newBand => dispatch({ type: 'ADD_BAND', payload: newBand })
  }
}


export default connect(null, mapDispatchToProps)(BandInput)
