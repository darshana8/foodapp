import { Component, OnInit } from '@angular/core';
import { Food } from '../../partial/header/shared/model/Food';
import { FoodService } from 'src/app/serives/food.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods:Food[]=[];
  starRating = 0;
  
  constructor(private foodService:FoodService,activateRoute:ActivatedRoute) {
    this.foods=foodService.getAll()
   }
  ngOnInit(): void {
   
  }


}
