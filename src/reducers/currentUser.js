import { USER_SIGNED_IN } from '../actions/user/sign-in'
import { USER_SIGNED_OUT } from '../actions/user/sign-out'

export default function storeCurrentUser(
  state = JSON.parse(localStorage.getItem('chatUser')) || {}, { type, payload }) {
  switch (type) {
    case USER_SIGNED_IN :
      localStorage.setItem('chatUser', JSON.stringify(payload))
      return payload

    case USER_SIGNED_OUT :
      localStorage.removeItem('chatUser')
      return {}

    default :
      return state
  }
}
