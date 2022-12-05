const { DataTypes } = require('sequelize')

const sequelize = require('../utils/database')

const Todo = sequelize.define("Todo", {
    //? Model Attributes
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },

    text: {
        type: DataTypes.STRING,
        allowNull: false
    },

    completed : {
        type : DataTypes.BOOLEAN,
        defaultValue : false,
        allowNull : true //? Default is true
    }

})

module.exports = Todo