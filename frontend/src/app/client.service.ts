import * as superagent from 'superagent';
import { Injectable } from '@angular/core';

@Injectable()
export class ClientService {

  constructor() { }

  /**
   * Get all tasks 
  */
  public async getAllTasks(): Promise<Array<any>> {
    try {
      const url = 'http://localhost:3000/';
      const response = await superagent
        .get(url)
        .timeout({ response: 25000, deadline: 30000 });

      return response.body;
    } catch (error) {
      return error;
    }
  }

  /**
   * Save task 
  */
  public async saveTask(params) {
    try {
      const url = 'http://localhost:3000/saveTask';
      const response = await superagent
        .post(url)
        .send(params)
        .timeout({ response: 25000, deadline: 30000 })
    } catch (error) {
      return error;
    }
  }
}
