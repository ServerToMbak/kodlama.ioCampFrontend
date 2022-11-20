import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product'

import { ThisReceiver } from '@angular/compiler';
import { ProductResponseModel } from 'src/app/Models/productResponseModel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[] = [];
  dataLoaded=false;

  productResponseModel:ProductResponseModel={
    data:this.products,
    message:"",
    success:true
  };
  constructor(private productService:ProductService ) { }

  ngOnInit(): void {
    this.getProducts();
    console.log(this.getProducts);
  }

  getProducts(){

   this.productService.getProducts().subscribe(response=>{
    this.products=response.data
    this.dataLoaded=true;
   });
  }
}
