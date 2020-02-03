
exports.seed = function(knex, Promise) {
  
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, task_name: 'Secure Doritos', description: 'Get in your vehicle or take public transportation to the store and buy Doritos. Go home.', project_id: 1, notes: 'The freshest bag is at the back of the row.' },
        {id: 2, task_name: 'Consume Doritos', project_id: 1, description: 'Open bag, insert Doritos into mouth. Chew.'},
        {id: 3, task_name: 'Doritos Bag Disposal', project_id: 1, description: 'Recycle.'}

       
      ]);
    }

