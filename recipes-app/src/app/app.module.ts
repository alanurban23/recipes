import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from './app.component';
import { RecipeComponent } from './recipe.component';
import { IngredientComponent } from './ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    IngredientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
