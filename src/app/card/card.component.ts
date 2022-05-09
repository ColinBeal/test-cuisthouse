import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import  { Recipe } from '../recipe.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit{
  public difficulties: string[] = [];
  public currentPath = window.location.pathname;

  @Input() card: Recipe = {
    _id: 0,
    label: 'label',
    category: 'category',
    url: 'url',
    difficultyRating: 1
  };

  constructor(
    private router: Router  ) {}

  ngOnInit(): void {
    //so we don't have to make a ngIf for each case of difficulty rating
    for (let i = 0; i < this.card.difficultyRating; i++) {
      this.difficulties.push('difficulty')
    }
  }

  goToDetails() {
    if (this.currentPath === '/favorites') {
      this.router.navigate(['/favorites/detail/',  this.card._id]);
    }
    else {
      this.router.navigate(['/recipes/detail/',  this.card._id]);
    }
  }
}
