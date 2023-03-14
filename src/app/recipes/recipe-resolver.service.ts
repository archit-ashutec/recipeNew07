import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { dataStorageService } from '../shared/data-storage.service';
import { Recipe } from './recipe.model';
import { recipeService } from './recipe.service';

@Injectable({ providedIn: 'root' })
export class recipeResolverService implements Resolve<Recipe[]> {
  constructor(
    private dataStorageService: dataStorageService,
    private recipeService: recipeService
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
    const recipes = this.recipeService.getRecipes();

    if (recipes.length === 0) {
      return this.dataStorageService.fatchRecipes();
    } else recipes;
  }
}
