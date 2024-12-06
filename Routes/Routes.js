const express = require('express')

const taskController  =require('../Controller/TaskController')

const router = express.Router()

router.post('/add',taskController.addTask)
router.get('/all',taskController.getTasks)
router.put('/update/:id',taskController.updateTask)
router.delete('/delete/:id',taskController.deleteTask)


module.exports = router;