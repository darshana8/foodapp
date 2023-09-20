import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../components/partial/header/shared/model/Cart';
import { Food } from '../components/partial/header/shared/model/Food';
import { CartItem } from '../components/partial/header/shared/model/CartItem';

@Injectable({
 providedIn: 'root'
})
export class CartService {
 private cart:Cart=new Cart()

 private cartSubject:BehaviorSubject<Cart>=new BehaviorSubject(this.cart)

 constructor() { }

 addToCart(food:Food):void{
  let cartItem=this.cart.items.find(item=>item.food.id ===food.id)
  if(cartItem)
  return;

  this.cart.items.push(new CartItem(food))
 }

 removeFromCart(foodId:string):void{
  this.cart.items=this.cart.items.filter(item=>item.food.id!= foodId)

 }
 ChangeQuantity(foodId:string,quantity:number){
  let cartItem=this.cart.items.find(item=>item.food.id===foodId)
  if(!cartItem)return;

  cartItem.quantity=quantity;
  cartItem.price=quantity*cartItem.food.price
 }

 clearCart(){
  this.cart=new Cart()
 }
 getCartObservables():Observable<Cart>{
return this.cartSubject.asObservable()
 }
 private setCartLocalStorage():void{
 
  this.cart.totalPrice=this.cart.items.reduce((prevSum,currentItem)=>prevSum + currentItem.price,0)
  const cartJson=JSON.stringify(this.cart)
  localStorage.setItem('cart',cartJson)
 }
}