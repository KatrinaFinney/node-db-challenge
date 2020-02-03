
exports.seed = function(knex) {
 
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, resource_name: 'car'},
        {id: 2, resource_name: 'hands'}
        
      ]);
    }

