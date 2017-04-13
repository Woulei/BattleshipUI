import { CALL_API, UPDATE } from '../../middleware/api'

export default (gameId) => {
  return {
    [CALL_API]: {
      service: 'games',
      method: UPDATE,
      authenticate: true,
      params: { joinGame: true },
      id: gameId,
    }
  }
}
