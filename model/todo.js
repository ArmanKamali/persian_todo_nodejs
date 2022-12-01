const fs = require('fs')
const path = require('path')

const rootDir = ('../utils/path')

const filePath = path.join(rootDir, 'data', 'todos.json')

class Todo {
    constructor(id, text, completed = false) {
        this.id = id
        this.text = text
        this.completed = completed
    }

    save(callback) {
        fs.writeFile(filePath, JSON.stringify(this), (err) => {
            if (err) callback(err);
        })
    }
}

module.exports = Todo;