const db = require('../data/db-config.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
    
}
//getShoppingList,
//getInstructions


function getRecipes() {
    return db('recipes');
}

function getShoppingList(id) {
    // select ingredient_name, quantity
    // from ingredients
    // inner join instructions as inst on ingredients.id = inst.ingredient_id
    // where recipe_id = 1
    return db ('ingredients')
    .select('ingredient_name', 'quantity')
    .innerJoin('instructions', 'ingredients.id', 'instructions.ingredient_id')
    .where({ 'recipe_id': id });

}

function getInstructions(id) {
    //select step_number, instructions
    // from Instructions
    // where recipe_id = 1
    // order by step_number
    return db('instructions')
    .select('step_number', 'instructions')
    .where({'recipe_id': id})
    .orderBy('step_number');
}