import { Component } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('a test recipe', 'test descr', 'https://i.pinimg.com/564x/d8/ff/75/d8ff752c79bb44db7b9b73c4d4e1103b.jpg'),
    new Recipe('a test recipe', 'test descr', 'https://i.pinimg.com/564x/d8/ff/75/d8ff752c79bb44db7b9b73c4d4e1103b.jpg')
  ];
}
