import { Injectable } from '@angular/core';
import { Food } from '../components/partial/header/shared/model/Food';
import { sample_foods } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  

  getAll():Food[]{
    return sample_foods
  }

  getALLFoodSearchTerm(searchTerm:string){
    return this.getAll().filter(food=>food.name.toLowerCase().includes
    (searchTerm.toLowerCase()))
  }
}
