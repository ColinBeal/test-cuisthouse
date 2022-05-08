import { Component, OnInit, Input } from '@angular/core';

import  { Recipe } from '../recipe.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit{
  public difficulties: string[] = []
  @Input() card: Recipe = {
    _id: 0,
    label: 'label',
    category: 'category',
    url: 'url',
    difficultyRating: 1
  };

  ngOnInit(): void {
    //so we don't have to make 5 ngIf, one for each case of difficulty rating
    for (let i = 0; i < this.card.difficultyRating; i++) {
      this.difficulties.push('difficulty')
    }
  }
}
