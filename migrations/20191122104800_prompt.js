exports.up = function (knex) {
  return knex.schema.createTable('prompt', t => {
    t.increments('id')
    t.string('promptItem').notNull()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('prompt')
}
