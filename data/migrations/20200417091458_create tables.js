
exports.up = function(knex) {
  return knex.schema

   .createTable('projects', prj => {
      prj.increments('id').primary().unique();
      prj.string('name', 255).notNullable().unique().index();
      prj.string('description', 255).notNullable();
      prj.integer('completed', 255).defaultTo(0).index();
   })

   .createTable('resources', rsrc => {
      rsrc.increments('id', 255).primary().unique();
      rsrc.string('name', 255).notNullable().unique().index();
      rsrc.string('description', 255);
   })

   .createTable('tasks', tsk => {
      tsk.increments('id', 255).primary().unique();
      tsk.integer('project_id', 255)
         .notNullable()
         .references('projects.id')
         .onDelete('RESTRICT')
         .onUpdate('CASCADE');
      tsk.string('project_description', 255)
         .references('projects.description')
         .onDelete('RESTRICT')
         .onUpdate('CASCADE')
      tsk.string('description', 255).notNullable();
      tsk.string('notes', 255);
      tsk.integer('completed', 255).defaultTo(0);
   })

   .createTable('project_resources', prsrc => {
      prsrc.increments('id', 255).primary();
      prsrc.integer('project_id', 255)
         .notNullable()
         .references('projects.id')
         .onDelete('RESTRICT')
         .onUpdate('CASCADE');
      prsrc.integer('resource_id', 255)
         .references('resources.id')
         .notNullable()
         .onDelete('RESTRICT')
         .onUpdate('CASCADE')
   })

};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('project_resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
};
