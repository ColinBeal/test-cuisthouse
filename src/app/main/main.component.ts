import { Component } from '@angular/core';

import  { Recipe } from '../recipe.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {
  public cards: Recipe[] = [
    {
      _id: 1,
      label: 'Tarte aux pommes et frangipane',
      category: 'Dessert',
      url: 'url(https://raw.githubusercontent.com/ColinBeal/test-cuisthouse/master/src/assets/img/tarte.jpg)',
      difficultyRating: 2
    },
    {
      _id: 2,
      label: 'Tarte aux pommes et frangipane',
      category: 'Dessert',
      url: 'url(https://raw.githubusercontent.com/ColinBeal/test-cuisthouse/master/src/assets/img/tarte.jpg)',
      difficultyRating: 1
    },
    {
      _id: 3,
      label: 'Tarte aux pommes et frangipane',
      category: 'Dessert',
      url: 'url(https://raw.githubusercontent.com/ColinBeal/test-cuisthouse/master/src/assets/img/tarte.jpg)',
      difficultyRating: 4
    },
  ]
}
