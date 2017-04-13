import React, { PureComponent } from 'react'

export class GamePage extends PureComponent {

  componentDidMount() {
    this.props.fetchGames(gameId)
  }

  render() {
    const { title } = this.props

    return(
      <div>{ title }</div>
    )
  }
}
