export class Ingredient {
  name: string;
  unit: string;
  value: number;

  constructor(name: string, unit: string, value: number) {
    this.name = name;
    this.unit = unit;
    this.value = +value;
  }
}