
exports.seed = function(knex) {
      // Inserts seed entries
  return knex('instructions').insert([
    {recipe_id: 1, ingredient_id: 1, step_number: 1, instructions: 'Put butter in pan for some reason, this is a weird taco recipe'},
    {recipe_id: 1, ingredient_id: 2, step_number: 2, instructions: 'Put some lettuce on it and eat its magic' },
    {recipe_id: 2, ingredient_id: 3, step_number: 1, instructions: 'Warm up the black beans in a pot' }
  ]);

};
