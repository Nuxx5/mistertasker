import { taskService } from '../../services/taskService'

// Thunk - Action Dispatcher
export function loadTasks(filterBy) {
  return async dispatch => {
    const tasks = await taskService.getTasks(filterBy)
    const action = {
      type: 'SET_TASKS',
      tasks
    }
    dispatch(action)
  }
}

export function getTaskById(taskId) {
  return async dispatch => {
    const task = await taskService.getTaskById(taskId)
    dispatch({ type: 'SET_TASK', task })
  }
}
export function saveTask(task) {
  return async dispatch => {
    const isAdd = !task._id
    const updatedTask = await taskService.save(task)

    if (isAdd) dispatch({ type: 'ADD_TASK', task: updatedTask })
    else dispatch({ type: 'UPDATE_TASK', updatedTask })
  }
}
// export function tryTask(taskId) {
//   return async dispatch => {
//     const updatedTask = await taskService.tryTask(taskId)
//     dispatch({ type: 'SET_TASK', task: updatedTask })
//   }
// }
// export function chargeTask(taskId, chargeAmount) {
//   return async (dispatch, getState) => {
//     const spendAmount = chargeAmount * 0.5

//     const userBalance = getState().userReducer.user.balance
//     if (userBalance < spendAmount) return alert('Not enough balance!')

//     const updatedTask = await taskService.chargeTask(taskId, chargeAmount)
//     dispatch({ type: 'SPEND_BALANCE', spendAmount })
//     dispatch({ type: 'SET_TASK', task: updatedTask })
//   }
// }
export function removeTask(taskId) {
  return async dispatch => {
    await taskService.removeTask(taskId)
    dispatch({ type: 'REMOVE_TASK', taskId })
  }
}

export function performTask(task) {
  return async dispatch => {
    await taskService.performTask(task)
    dispatch({ type: 'PERFORM_TASK', task })
  }
}