import { Food } from "./Food";

export class CartItem{


    constructor(public food:Food){
        this.food=food;
    }

    quantity:Number=1;
    price:number=this.food.price
}