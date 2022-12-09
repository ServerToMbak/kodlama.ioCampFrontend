import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../Models/loginModel';
import { ResponseModel } from '../Models/responseModel';
import { SingleResponseModel } from '../Models/singleResponseModel';
import { TokenModel } from '../Models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl="https://localhost:44384/api/auth/";
  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModel){
      return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",loginModel)
  }

  isAuhentciated(){
    if(localStorage.getItem("token")){
      return true;
    }else{
      return false;
    }
  }
}
