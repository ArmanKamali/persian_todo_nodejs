const Todo = require('../model/todo')


exports.getIndex = async (req, res) => {
    try {
        const completedTodos = await Todo.count({ where: { completed: true } })
        const todos = await Todo.findAll();
        res.render('index', {
            pageTitle: 'کارهای روزمره',
            todos,
            completedTodos,
            remainingTodos: todos.length - completedTodos
        })
    } catch (error) {
        console.log(error)
    }   
}

//* CRUD => Create, Read, Update, Delete