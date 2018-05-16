/**
 * Controller of tasks
 */

const Task = require('../model/firebase');
var uniqid = require('uniqid');

class ScheduleTask {
  
  constructor(){
    this.db = Task.database();
    this.ref = this.db.ref('schedule');
  }

  /**
   * Getting all tasks from firebase db
  */
  async getTasks(param, callback){
    try {
      await this.ref.on("value", (snapshot) => {
        callback(null, snapshot)
      })
    } catch (error) {
      callback('Bad request. There is no tasks!', null)
    }
  }

  /**
   * Saving the task in firebase db
  */
  async saveTask(param, callback){
    const taskId = uniqid();
    try {
      await this.ref.child(taskId).set({
          "id": taskId,
          "title": param.title,
          "description": param.description,
          "isOpen": param.isOpen,
          "createdAt": Date.now()
      });
      callback(null, param)
    } catch (error) {
      callback('Bad request.', null)
    }
  }

  /**
   * Updating tasks in firebase db
  */
  async updateTask(param, callback) {
    try {
      await this.ref.child(param.id).update({
        "isOpen": param.isOpen,
      })
      callback(null, param)
    } catch (error) {
      callback('Bad request.', null)
    }
  }
}

module.exports = new ScheduleTask();