import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
import { recipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [];

  constructor(private recipeService: recipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
}
