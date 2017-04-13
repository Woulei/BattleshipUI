import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import FlatButton from 'material-ui/FlatButton'

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
    const { value, cellIndex, opponent } = this.props
    if (this.props.opponent) {
      switch(value) {
        case 1:
          return (<FlatButton label={cellIndex + 1} default={true} style={water} />)
        case 2:
          return (<FlatButton label={cellIndex + 1} disabled={true} style={waterhit} />)
        case 4:
          return (<FlatButton label={cellIndex + 1} disabled={true} style={shiphit} />)
      }
    }

    switch(value) {
      case 1:
        return (<FlatButton label={cellIndex + 1} disabled={true} style={water} />)
      case 2:
        return (<FlatButton label={cellIndex + 1} disabled={true} style={waterhit} />)
      case 3:
        return (<FlatButton label={cellIndex + 1} disabled={true} style={ship} />)
      case 4:
        return (<FlatButton label={cellIndex + 1} disabled={true} style={shiphit} />)
    }
  }

  render() {

    console.log(this.props)
    return (
      <div>
        { this.renderButton() }
      </div>
    )
  }
}

export default Cell
