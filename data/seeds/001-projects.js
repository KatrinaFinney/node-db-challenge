
exports.seed = function(knex, Promise) {
  
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project_name: 'Eat doritos', description: 'Eat a bag of Doritos' },
        {id: 2, project_name: 'Songwriting'}
       
      ]);
    }

