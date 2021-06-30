import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private _userUrl = "http://localhost:5000/api/customer";
  private _loginUrl = "http://localhost:5000/api/auth/login"

  constructor(private http:HttpClient) { }

  getToken(){
    return sessionStorage.getItem('jwt');
  }

  getUsers():Observable<any>{
    return this.http.get<any>(this._userUrl); 
  }

  }


