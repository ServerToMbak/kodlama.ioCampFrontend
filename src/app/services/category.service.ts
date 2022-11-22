import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/listResponseNodel';
import { Category } from '../Models/category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = "https://localhost:44384/api/categories/getall";

  constructor(private httpClient:HttpClient) { }

  getCategories():Observable<ListResponseModel<Category>>{
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl)}
}
