import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/Models/cartItem';
import { Product } from 'src/app/Models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
  cartItems:CartItem[]=[];

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.getCard();
  }
    getCard(){
      this.cartItems=this.cartService.list();
    }
    removeFromCart(product:Product){
      this.cartService.removeFromCart(product)
    }
}
