const { Sequelize } = require('sequelize')

const sequelize = new Sequelize("todo_db", "root", '323633730', {
    dialect: 'mysql',
    host: 'localhost'

})

module.exports = sequelize
