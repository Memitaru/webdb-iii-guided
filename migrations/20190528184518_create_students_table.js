
exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', tbl => {
      tbl.increments();
      tbl.string('name', 255).notNullable();

      // add a foreign key
      tbl.integer('roles_id').unsigned().reference('id').inTable('roles').onDelete('CASCADE').onUpdate('CASCADE');

      tbl.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('students')
};
