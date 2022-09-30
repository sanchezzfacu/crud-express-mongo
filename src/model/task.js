module.exports = function() {
    let db = require('../libs/db-connection')()
    let Schema = require('mongoose').Schema

    let Task = Schema({
        title: String,
        description: String,
        state: Boolean
    })

    return db.model('tasks', Task)
}