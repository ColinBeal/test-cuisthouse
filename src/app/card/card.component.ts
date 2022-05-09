import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import  { Recipe } from '../recipe.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  public currentPath = window.location.pathname;

  @Input() card: Recipe = {
    _id: 0,
    label: 'label',
    category: 'category',
    url: 'url',
    difficultyRating: 1
  };

  constructor(private router: Router  ) {}

  goToDetails() {
    if (this.currentPath === '/favorites') {
      this.router.navigate(['/favorites/detail/',  this.card._id]);
    }
    else {
      this.router.navigate(['/recipes/detail/',  this.card._id]);
    }
  }
}
