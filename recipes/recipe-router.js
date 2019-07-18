const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipe => {
        res.status(200).json(recipe);
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

router.get('/:id/shoppingList', (req, res) => {
    const { id } = req.params;
    Recipes.getShoppingList(id)
    .then(list => {
        if(list){
            res.status(200).json(list);
        } else {
            res.status(404).json({ message: "no recipe with that id" });
        }
    })
    .catch(err => {
        res.status(500).json(err);
    })
});

router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;
    Recipes.getInstructions(id)
    .then(steps => {
        res.status(200).json(steps);
    })
    .catch(err => {
        res.status(500).json(err);
    })
    
});


module.exports = router;