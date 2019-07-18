
exports.seed = function(knex) {
  // Inserts seed entries
    return knex('recipes').insert([
      {recipe_name: 'Tacos'},
      {recipe_name: 'Black Bean Burgers'}
      
    ]);
};
