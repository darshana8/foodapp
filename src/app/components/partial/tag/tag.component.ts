import { Component } from '@angular/core';
import { FoodService } from 'src/app/serives/food.service';
import { Tag } from 'src/tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent {
tags?:Tag[]

constructor(foodService:FoodService){
  this.tags=foodService.getAllTags()
}
}
