import { userService} from '../../services/userService'

export function spendBalance(spendAmount) {
  return async dispatch => {
    // Update the userService
    dispatch({ type: 'SPEND_BALANCE', spendAmount })
  }
}
export function signup(user) {
  return async dispatch => {
    await userService.signup(user)
    dispatch({ type: 'SIGNUP', user })
  }
}

export function addMove(contact, amount) {
  return async (dispatch, getState) => {

    const userBalance = getState().userReducer.user.coins
    if (userBalance < amount) return alert('Not enough balance!')
    const updatedUser = await userService.addMove(contact, amount)
    dispatch({ type: 'ADD_MOVE', amount })
    // dispatch({ type: 'SET_CONTACT', contact: updatedContact })
  }
}
// export function addMove(contact, amount) {
//   return async (dispatch, getState) => {
//     const spendAmount = chargeAmount * 0.5

//     const userBalance = getState().userReducer.user.balance
//     if (userBalance < spendAmount) return alert('Not enough balance!')

//     const updatedContact = await contactService.chargeContact(contactId, chargeAmount)
//     dispatch({ type: 'SPEND_BALANCE', spendAmount })
//     dispatch({ type: 'SET_CONTACT', contact: updatedContact })
//   }
// }
