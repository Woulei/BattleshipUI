import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Cell from './Cell'

class Grid extends PureComponent {
  renderGrid(player) {
    const board = this.props.board

    switch(player) {
      case "two":
        return board.map((cell, index) => {
          return <Cell key={index} opponent={false} cellIndex={index} value={cell} />
        })
      default:
        return board.map((cell, index) => {
          return <Cell key={index} opponent={true} cellIndex={index} value={cell} />
        })
      }
    }
  render() {
    return (
      <div className="grid">
        {this.renderGrid()}
      </div>
    )
  }
}

export default Grid
