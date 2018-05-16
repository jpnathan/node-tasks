const { Router } = require('express');
const task = require('../controller/scheduleTask')

const route = Router();

route.get('/', (req, res) => {
  task.getTasks(req.query, (err, data) => {
    if (err) res.status(500).json(err);
    else res.status(200).json(data);
  })
})

route.post('/saveTask', (req, res) => {
  task.saveTask(req.body, (err, data) => {
    if (err) res.status(500).json(err);
    else res.send(data);
  })
})

route.put('/finishTask', (req, res) => {
  task.updateTask(req.body, (err, data) => {
    if(err) res.status(500).json(err);
    else res.status(200).json(data);
  })
})

module.exports = route;