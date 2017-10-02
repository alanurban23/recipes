import {Injectable} from '../../node_modules/@angular/core';
import {INGREDIENTS} from './ingredient.data';

@Injectable()

export class IngredientService {
    getIngredients() {
        return INGREDIENTS;
    }
}