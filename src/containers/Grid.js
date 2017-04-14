import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Cell from './Cell'

class Grid extends PureComponent {
  renderGrid() {
    const board = this.props.board
    const opponent = this.props.opponent

    switch(opponent) {
      case false:
        return board.map((cell, index) => {
          return <Cell key={index} opponent={false} cellIndex={index} value={cell} gameId={this.props.gameId} />
        })
      default:
        return board.map((cell, index) => {
          return <Cell key={index} opponent={true} cellIndex={index} value={cell} gameId={this.props.gameId} />
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
