exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments();
      tbl.string('project_name', 128)
        .notNullable();
      tbl.string('description', 128)
      tbl.boolean('completed').notNullable().defaultTo(false);

    })
    // we can chain together createTable
    .createTable('tasks', tbl => {
      tbl.increments();
      tbl.string('task_name', 128)
      .notNullable();
      tbl.string('description', 128)
        .notNullable();
      tbl.string('notes', 128)
      tbl.integer('project_id')
        // forces integer to be positive
        .unsigned()
        .notNullable()
        .references('id')
        // this table must exist already
        .inTable('projects');
        tbl.boolean('completed').notNullable().defaultTo(false);
    })
    .createTable('resources', tbl => {
      tbl.increments();
      tbl.string('resource_name', 128)
      .notNullable()
      tbl.string('description', 128);
      tbl.integer('project_id')
        // forces integer to be positive
        .unsigned()
        
        .references('id')
        // this table must exist already
        .inTable('projects')
    })
    .createTable('project_resources', tbl => {
      tbl.integer('project_id')
        // forces integer to be positive
        .unsigned()
        
        .references('id')
        // this table must exist already
        .inTable('projects');
      tbl.integer('resource_id')
        // forces integer to be positive
        .unsigned()
        .notNullable()
        .references('id')
        // this table must exist already
        .inTable('resources')

        tbl.primary([ 'project_id', 'resource_id' ]);
    })
};

exports.down = function(knex, Promise) {
  // drop in the opposite order
  return knex.schema
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
};
