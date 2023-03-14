import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { recipeService } from '../recipes/recipe.service';
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { authService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class dataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: recipeService,
    private authService: authService
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'https://firstproject-37d46-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((response) => console.log(response));
  }
  fatchRecipes() {
    return this.http
      .get<Recipe[]>(
        'https://firstproject-37d46-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes) => this.recipeService.setRecipes(recipes))
      );
  }
}
