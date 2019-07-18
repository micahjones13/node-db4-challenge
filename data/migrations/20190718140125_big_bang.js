
exports.up = function(knex) {
  //recipes, ingredients, recipe_ingredients 
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments();

      tbl
      .string('recipe_name', 128)
      .notNullable();
  })
  .createTable('ingredients', tbl => {
      tbl.increments();

      tbl
      .string('ingredient_name')
      .notNullable()
      .unique();
      tbl
      .float('quantity');  
  })
  .createTable('instructions', tbl => {
      tbl.increments();


      tbl
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
      tbl
      .integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
      tbl
      .integer('step_number');
      tbl
      .string('instructions');
      
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('instructions')
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients');
    
};
