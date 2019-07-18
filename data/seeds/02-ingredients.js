
exports.seed = function(knex) {
   // Inserts seed entries
  return knex('ingredients').insert([
    {ingredient_name: 'butter', quantity: 1.5},
    {ingredient_name: 'Lettuce', quantity: 1},
    {ingredient_name: 'Black Beans', quantity: 3.5}
  ]);
};
