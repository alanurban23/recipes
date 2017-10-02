import { FormControl } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

import { RecipesService } from './recipe.service';

export function ValidateId(control: AbstractControl) {
    let recipes = new RecipesService;
    let inputId: number = +control.value;
    let isValid: boolean = null;

    /*recipes.getRecipes().forEach(element => {

        let id: number = element.id;
        console.log(inputId + " | " + id);
        isValid = (id == inputId) ? false : true;
    });*/

    isValid = recipes.getRecipes().every(function (el) {
        return !(el.id === inputId);
    });

    if (isValid) {
        return null;
    } else {
        return {
            id: {
                validId: false
            }
        };
    }
}
