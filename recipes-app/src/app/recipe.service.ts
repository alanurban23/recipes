import {RECIPES} from './recipe.data';
import {Injectable} from '../../node_modules/@angular/core';

@Injectable()

export class RecipesService {
    getRecipes() {
        return RECIPES;
    }
}