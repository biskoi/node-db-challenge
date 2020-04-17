const db = require('../data/dbconfig')

//   - [ ] Build an API with endpoints for:
//   - [ ] adding resources.
//   - [ ] retrieving a list of resources.
//   - [ ] adding projects.
//   - [ ] retrieving a list of projects.
//   - [ ] adding tasks.
//   - [ ] retrieving a list of tasks. **The list of tasks should include the project name and project description**.

module.exports = {
   p, // gets projects
   pAdd, // adds projects
   t,
   tAdd,
   r,
   rAdd
}

function p () {
   return db('projects');
}

function pAdd (newProj) {
   return db('projects')
      .insert(newProj)
      .then(res => {
         return p();
      });
}

function t () {
   return db('tasks AS t')
   .join('projects AS p', 't.project_id', 'p.id')
   .select(
      't.id AS task_id',
      'p.id AS project_id',
      'p.name AS project_name',
      'p.description AS project_description',
      't.description AS task_description',
      't.notes',
      't.completed'
      );

}

function tAdd (newTask) {
   return db('tasks')
      .insert(newTask)
      .then(rep => {
         return t();
      });
}

function r () {
   return db('resources');
}

function rAdd (newRes) {
   return db('resources')
      .insert(newRes)
      .then(res => {
        return r();
      });
}