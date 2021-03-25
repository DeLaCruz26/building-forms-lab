import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band, idx) => <li key={idx}>{band.name}</li>)

  render() {
    return(
      <div>
          <BandInput addBand={this.props.addBand} />
          <ul>
            {this.renderBands()}
          </ul>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return{
    addBand: payload => dispatch({ type: 'ADD_BAND', payload: payload })
  }
}


const mapStateToProps = state => {
  return{
    bands: state.bands
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
