import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})

export class RecipesDetailComponent implements OnInit{
  public currentPath?: string;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.currentPath = this.activatedRoute.snapshot.url[0].path
  }
}
