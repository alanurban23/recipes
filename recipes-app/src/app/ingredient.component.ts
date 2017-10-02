import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule } from '@angular/forms';
import { Ingredient } from './ingredient';
import { IngredientService } from './ingredient.service';

@Component({
    selector: 'ingredient-form',
    templateUrl: './ingredient.component.html',
    providers: [IngredientService],
})

export class IngredientComponent {

    ingredients: Ingredient[];
    formIngredient: FormGroup;
    ingredientArray = ['milk', 'water', 'tomatoes', 'onion', 'sugar'];
    unitArray = ['ml', 'g'];

    constructor(private _ingredientService: IngredientService ,private fb: FormBuilder) {
        this.formIngredient = fb.group({
            'name': [null, Validators.required],
            'unit': [null, Validators.required],
            'value': [null, Validators.required],
            'validate': ''
        })
    }

    getIngredients() {
        this.ingredients = this._ingredientService.getIngredients();
    }

    ngOnInit() {
        this.getIngredients();
    }

    onCreate(ingredient) {
        this.ingredients.push(new Ingredient(ingredient.name, ingredient.unit, ingredient.value));
        this.formIngredient.reset();
    }

}