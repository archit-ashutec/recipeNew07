import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { dataStorageService } from 'src/app/shared/data-storage.service';
import { Recipe } from '../recipe.model';
import { recipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [];
  unsubscriber: Subscription;

  constructor(
    private recipeService: recipeService,
    private router: Router,
    private route: ActivatedRoute,
    private dataStorageService: dataStorageService
  ) {}

  ngOnInit(): void {
    this.unsubscriber = this.recipeService.recipeChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes();
    this.dataStorageService.fatchRecipes();
  }
  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  onDistroy() {
    this.unsubscriber.unsubscribe();
  }
}
