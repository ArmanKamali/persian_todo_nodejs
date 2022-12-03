const fs = require('fs')

const todoUtils = require('../utils/todos')

class Todo {
    constructor(id, text, completed = false) {
        this.id = id
        this.text = text
        this.completed = completed
    }

    save(callback) {
        todoUtils.getTodos(todos => {
            todos.push(this)
            todoUtils.saveTodos(todos, err => {
                callback(err)
            })
        })
    }

    static fetchAll(callback) {
        todoUtils.getTodos(todos => {
            callback(todos)
        })
    }

    static deleteTodo(id, callback) {
        todoUtils.getTodos(todos => {
            todoUtils.saveTodos(todos.filter(t => t.id != id), err => {
                callback(err)
            })
        })
        fs.readFile(filePath, (err, fileContent) => {
            const todos = JSON.parse(fileContent)
            const filteredTodos = todos.filter(todo => todo.id != id)
            fs.writeFile(filePath, JSON.stringify(filteredTodos), err => {
                callback(err)
            })
        })
    }

    static setTodoToComplete(id, callback) {
        fs.readFile(filePath, (err, fileContent) => {
            const todos = JSON.parse(fileContent);
            const todoIndex = todos.findIndex(t => t.id == id)
            const todo = todos[todoIndex]
            todo.completed = true;
            todos[todoIndex] = todo
            fs.writeFile(filePath, JSON.stringify(todos), err => {
                callback(err)
            })
        })
    }
}

module.exports = Todo;