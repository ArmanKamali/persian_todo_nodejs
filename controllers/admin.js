const Todo = require('../model/todo')
const todoUtils = require('../utils/todos')
exports.addToto = (req, res) => {
    if (!req.body.todo) return res.redirect('/');

    const todo = new Todo(todoUtils.generateRandomid(), req.body.todo);
    todo.save(err => {
        console.log('e=', err)
        if (!err) res.redirect('/')
        else {
            console.log(err)
        }
    })
}

exports.deleteTodo = (req, res) => {
    Todo.deleteTodo(req.params.id, err => {
        if (!err) res.redirect('/')
        else console.log(err)
    })
}

exports.completeTodo = (req, res) => {
    Todo.setTodoToComplete(req.params.id, err => {
        if (!err) res.redirect('/')
        else
            console.log(err)
    })
}