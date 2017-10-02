import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { Recipe } from './recipe';
import { Ingredient } from './ingredient';
import { RecipesService } from './recipe.service';
import { IngredientService } from './ingredient.service';
import { ValidateId } from './recipe.validator';

@Component({
    selector: 'recipe',
    providers: [RecipesService, IngredientService],
    templateUrl: './recipe.component.html',
})


export class RecipeComponent implements OnInit {
    
    selectedRecipe: Recipe;
    recipes: Recipe[];
    formRecipe: FormGroup;
    idAlert: string = 'The id field must be unique!';
    ingredients: Ingredient[];

    constructor(private _recipeService: RecipesService, private _ingredientService: IngredientService, private fb: FormBuilder) {
        this.formRecipe = fb.group({
            'id': [null, Validators.compose([Validators.required, ValidateId])],
            'name': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
            'big_amount': [null, Validators.required],
            'ingredients': [null, Validators.required],
            'validate': ''
        })
    }

    getData() {
        this.recipes = this._recipeService.getRecipes();
        this.ingredients = this._ingredientService.getIngredients();
    }

    ngOnInit() {
        this.getData();
    }

    onCreate(recipe) {
        console.log(recipe.ingredients);
        this.recipes.push(new Recipe(recipe.id, recipe.name, recipe.big_amount, recipe.ingredients));
        this.formRecipe.reset();
        console.log(this.recipes);
    }

    onSelect(recipe): void {
        this.selectedRecipe = recipe;
        this.selectedRecipe.ingredients = recipe.ingredients;
    }

    onDelete(recipe: Recipe): void {
        this.recipes.splice(this.recipes.indexOf(recipe), 1);
    }

}