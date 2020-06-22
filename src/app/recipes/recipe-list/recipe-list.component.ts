import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes : Recipe[] =  [
new Recipe('a test recipe', 'this is simply a test','https://hips.hearstapps.com/hmg-prod/images/delish-classic-stuffed-peppers-horizontal-1538065876.jpg'),
new Recipe('a test recipe', 'this is simply a test','https://hips.hearstapps.com/hmg-prod/images/delish-classic-stuffed-peppers-horizontal-1538065876.jpg')

];
constructor() { }

  ngOnInit() {

  }

}
