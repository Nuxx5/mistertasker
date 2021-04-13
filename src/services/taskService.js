import { httpService } from "./http.service.js";

export const taskService = {
  getTasks,
  getTaskById,
  removeTask,
  saveTask,
  getEmptyTask,
  performTask
};

function getTasks() {
  return httpService.get(`task`);
}

function getTaskById(taskId) {
  return httpService.get(`task/${taskId}`);
}

function removeTask(taskId) {
  return httpService.delete(`task/${taskId}`);
}

// Update or Add
function saveTask(task) {
  if (task._id) {
    return httpService.put(`task/${task._id}`, task);
  } else {
    return httpService.post(`task`, task);
  }
}

function getEmptyTask() {
  return {
    title: '',
    description: '',
    importance: 1,
    createdAt: null,
    lastTried: null,
    triesCount: 0,
    doneAt: null
  }
}

function performTask(task){
  return httpService.put(`task/${task._id}/start`, task);
}