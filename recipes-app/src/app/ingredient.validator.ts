import { FormControl } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

import { IngredientService } from './ingredient.service';

export function ValidateValueIngredients(control: AbstractControl) {
    let ingredients = new IngredientService;
    let sumIngredients = ingredients.getIngredients().forEach(element => {
        return element.value+=element.value;
    });

    return null;
}
