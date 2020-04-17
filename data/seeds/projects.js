
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
            id: 1,
            name: "sampleProj1",
            description: "someDesc1",
            completed: 0
        },
        {
            id: 2,
            name: "sampleProj2",
            description: "someDesc2",
            completed: 1
        }
    ]);
    });
};
