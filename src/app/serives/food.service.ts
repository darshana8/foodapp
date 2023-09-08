import { Injectable } from '@angular/core';
import { Food } from '../components/partial/header/shared/model/Food';
import { sample_foods, sample_tags } from 'src/data';
import { Tag } from 'src/tag';

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

  getAllTags():Tag[]{
    return sample_tags;
  }

  getAllFoodByTag(tag:string):Food[]{
    return tag==='All'?
    this.getAll():
    this.getAll().filter(food=>food.tags?.includes(tag))
  }
}
