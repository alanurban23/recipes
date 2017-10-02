export class Recipe {
  id: number;
  name: string;
  big_amount: boolean;
  ingredients: string;

  constructor(id: number, name: string, big_amount: boolean, ingredients: string) {
    this.id = id;
    this.name = name;
    this.big_amount = big_amount;
    this.ingredients = ingredients;
  }
}