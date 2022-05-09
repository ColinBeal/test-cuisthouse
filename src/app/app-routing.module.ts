import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FavoritesComponent } from "./favorites/favorites.component";
import {  MainComponent } from "./main/main.component";
import { RecipesDetailComponent } from "./recipe-detail.component.html/recipe-detail.component";
import { RecipesComponent } from "./recipes/recipes.component";


const routes: Routes = [
  { path: '',   redirectTo: '/main', pathMatch: 'full' },
  { path: 'main',                    component: MainComponent },
  { path: 'recipes',                 component: RecipesComponent },
  { path: 'favorites',               component: FavoritesComponent },
  { path: 'recipes/detail/:recipeId', component: RecipesDetailComponent },
  { path: 'favorites/detail/:recipeId', component: RecipesDetailComponent },
]

@NgModule({
  imports:   [RouterModule.forRoot(routes)],
  exports:   [RouterModule]
})

export class AppRoutingModule {}
