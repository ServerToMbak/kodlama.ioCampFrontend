import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product'

import { ThisReceiver } from '@angular/compiler';

import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[] = [];
  dataLoaded=false;
  filterText="";

  constructor(private productService:ProductService, private acticatedRoute:ActivatedRoute ) { }

  ngOnInit(): void {
    this.acticatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"])
      }else{
        this.getProducts()
      }
    })
  }

  getProducts(){

   this.productService.getProducts().subscribe(response=>{
    this.products=response.data
    this.dataLoaded=true;
   });
  }
  getProductsByCategory(categoryId:number){

    this.productService.getProductsByCategory(categoryId).subscribe(response=>{
     this.products=response.data
     this.dataLoaded=true;
    });
   }
}
