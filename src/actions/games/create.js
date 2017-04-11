import { CALL_API, CREATE } from '../../middleware/api'

export default () => {
  return {
    [CALL_API]: {
      service: 'games',
      method: CREATE,
      type: 'GAME_POSTED',
      authenticate: true,
    }
  }
}
