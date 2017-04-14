import { CALL_API, PATCH } from '../../middleware/api'

export default (cellNumber, gameId) => {
  return {
    [CALL_API]: {
      service: 'games',
      method: PATCH,
      id: gameId,
      type: 'MAKE_MOVE',
      authenticate: true,
      params: { makeMove: true, cell: cellNumber }
    }
  }
}
