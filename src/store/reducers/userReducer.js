const INITIAL_STATE = {
  user: { name: '', coins: 100 }
}
export function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_MOVE':
      return {
        ...state,
        user: { ...state.user, coins: state.user.coins - action.amount }
      }
      case 'SIGN':
      return {
        ...state,
        user: { ...state.user}
      }
    default:
      return state
  }
}