import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { DifficultyRatingComponent } from './difficulty-rating/difficulty-rating.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { FooterComponent } from './footer/footer.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { MainComponent } from './main/main.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RecipesDetailComponent } from './recipe-detail.component.html/recipe-detail.component';
import { RecipesComponent } from './recipes/recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DifficultyRatingComponent,
    FavoritesComponent,
    FooterComponent,
    GuidelinesComponent,
    MainComponent,
    NavBarComponent,
    RecipesDetailComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
