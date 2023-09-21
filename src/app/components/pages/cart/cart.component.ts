import { Component, OnInit } from '@angular/core';
import { Cart } from '../../partial/header/shared/model/Cart';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from '../../partial/header/shared/model/CartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cart!:Cart;

constructor(private cartService:CartService){
  this.cartService.getCartObservable().subscribe((cart)=>{
    this.cart=cart
  })
}

  ngOnInit(): void {
      
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
  }

  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity=parseInt(quantityInString);
    this.cartService.ChangeQuantity(cartItem.food.id ,quantity)
  }
}
