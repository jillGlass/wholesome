const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getPromptById
}

function getPromptById (id, db = connection) {
  return db('prompt').where('id', id).select().first()
}
