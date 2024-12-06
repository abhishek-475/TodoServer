const express = require('express')

const taskController  =require('../Controller/TaskController')

const router = express.Router()

router.post('/tasks',taskController.addTask)
router.get('/tasks',taskController.getTasks)
router.put('/tasks/:id',taskController.updateTask)
router.delete('/tasks/:id',taskController.deleteTask)


module.exports = router;