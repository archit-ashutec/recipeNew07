import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { shoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class recipeService {
  recipeChanged = new Subject<Recipe[]>();
  // private recipes: Recipe[] = [
  // new Recipe(
  //   'Surprice In The Box',
  //   'I dont know how to make it',
  //   'https://img.freepik.com/free-photo/indian-butter-chicken-black-bowl-black-background_123827-20757.jpg?w=996&t=st=1677241260~exp=1677241860~hmac=6b4770600bc8ecd89bfd9d7b1021493d336960ddb548c1b0c7194d3b921a2116',
  //   [
  //     new Ingredient('meat ', 1),
  //     new Ingredient('cake ', 3),
  //     new Ingredient('cherry ', 5),
  //   ]
  // ),
  // new Recipe(
  //   'Pancakes',
  //   'I dont know how to make it',
  //   'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //   [
  //     new Ingredient('chole ', 1),
  //     new Ingredient('bhature ', 3),
  //     new Ingredient('mutter ', 5),
  //   ]
  // ),
  // ];

  private recipes: Recipe[] = [];

  constructor(private shoppingListService: shoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
