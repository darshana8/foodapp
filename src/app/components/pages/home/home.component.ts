import { Component, OnInit } from '@angular/core';
import { Food } from '../../partial/header/shared/model/Food';
import { FoodService } from 'src/app/services/food.service';
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
    activateRoute.params.subscribe((params)=>{
      if(params.searchTerm)
        this.foods=this.foodService.getALLFoodSearchTerm(params.searchTerm)
  else if (params.tag)
  this.foods=this.foodService.getAllFoodByTag(params.tag)
      else
      this.foods=foodService.getAll()
    })
    this.foods=foodService.getAll()
   }
  ngOnInit(): void {
   
  }


}
