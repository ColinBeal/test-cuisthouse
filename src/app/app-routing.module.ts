import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {  MainComponent } from "./main/main.component";
import { RecipesComponent } from "./recipes/recipes.component";


const routes: Routes = [
  { path: '',   redirectTo: '/main', pathMatch: 'full' },
  { path: 'main',          component: MainComponent },
  { path: 'recipes',       component: RecipesComponent },
]

@NgModule({
  imports:   [RouterModule.forRoot(routes)],
  exports:   [RouterModule]
})

export class AppRoutingModule {}
