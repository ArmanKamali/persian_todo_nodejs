const express = require('express')

const adminController = require('../controllers/admin')

const router = express.Router();

router.post('/add-todo', adminController.addToto)

router.get('/delete-todo/:id', adminController.deleteTodo)
router.get('/completed-todo/:id', adminController.completeTodo)


module.exports = router;
