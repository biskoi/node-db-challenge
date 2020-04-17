
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          id: 1,
          name: "newResource",
          description: "desc for newResource"
      },
      {
          id: 2,
          name: "newResource2",
          description: "desc for newResource2"
      },
      {
          id: 3,
          name: "newResource3",
          description: "desc for newResource3"
      }
      ]);
    });
};
