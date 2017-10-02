import { Component } from '@angular/core';
import {Recipe} from './recipe';
import {RecipesService} from './recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Recipes App';
}


