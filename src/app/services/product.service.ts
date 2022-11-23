import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/listResponseNodel';
import { Product } from '../Models/Product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://localhost:44384/api/";

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>>{
    let newPath=this.apiUrl+"products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPath)
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>>{
    let newPath=this.apiUrl+"Products/getbycategory?CategoryId="+categoryId
      return this.httpClient.get<ListResponseModel<Product>>(newPath)
  }
}
