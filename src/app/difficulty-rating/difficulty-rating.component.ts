import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'difficulty-rating',
  templateUrl: './difficulty-rating.component.html',
})

export class DifficultyRatingComponent implements OnInit{
  public difficulties: string[] = [];

  @Input() rating: number = 0

  constructor(
    private router: Router  ) {}

  ngOnInit(): void {
    //so we don't have to make a ngIf for each case of difficulty rating
    for (let i = 0; i < this.rating; i++) {
      this.difficulties.push('difficulty')
    }
  }
}
