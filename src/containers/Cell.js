import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import FlatButton from 'material-ui/FlatButton'
import makeMove from '../actions/games/makeMove'

const water = {
    backgroundColor: 'dodgerblue',
    color: 'white',
    height: '50px',
    minWidth: '50px',
    borderRadius: '0px'
}
const waterhit = {
    backgroundColor: 'blue',
    color: 'white',
    height: '50px',
    minWidth: '50px',
    borderRadius: '0px'
}
const ship = {
    backgroundColor: 'lightgrey',
    color: 'white',
    height: '50px',
    minWidth: '50px',
    borderRadius: '0px'
}
const shiphit = {
    backgroundColor: 'black',
    color: 'white',
    height: '50px',
    minWidth: '50px',
    borderRadius: '0px'
}

class Cell extends PureComponent {

  renderButton() {
    const { value, cellIndex, opponent, gameId } = this.props
    const cellNumber = cellIndex + 1
    if (this.props.opponent) {
      switch(value) {
        case 1:
          return (<FlatButton label={cellNumber} default={true} style={water} onClick={() => {this.props.makeMove(cellNumber, gameId)}} />)
        case 2:
          return (<FlatButton label={cellNumber} disabled={true} style={waterhit} onClick={() => {this.props.makeMove(cellNumber, gameId)}} />)
        case 3:
          return (<FlatButton label={cellNumber} default={true} style={water} onClick={() => {this.props.makeMove(cellNumber, gameId)}} />)
        case 4:
          return (<FlatButton label={cellNumber} disabled={true} style={shiphit} onClick={() => {this.props.makeMove(cellNumber, gameId)}} />)
      }
    }

    switch(value) {
      case 1:
        return (<FlatButton label={cellNumber} disabled={true} style={water} />)
      case 2:
        return (<FlatButton label={cellNumber} disabled={true} style={waterhit} />)
      case 3:
        return (<FlatButton label={cellNumber} disabled={true} style={ship} />)
      case 4:
        return (<FlatButton label={cellNumber} disabled={true} style={shiphit} />)
    }
  }

  render() {
    return (
      <div>
        { this.renderButton() }
      </div>
    )
  }
}

export default connect(null, { makeMove })(Cell)
