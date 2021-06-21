import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users:Users;
  constructor(private http:HttpClient) { }

  getUsers():Observable<Users>{
       return this.http.get<Users>(environment.apiHost+'/users');
   }
 
   getSingleUser(pid):Observable<Users>{
     return this.http.get<Users>(environment.apiHost+'/users/'+pid);
   }
 
   createUser(payload):Observable<Users>{
     return this.http.post<Users>(environment.apiHost+'/users', payload);
   }
   
   updateUser(pid,payload):Observable<Users>{
     return this.http.put<Users>(environment.apiHost+'/users/'+pid, payload);
   }

   deleteUser(pid):Observable<Users>{
    return this.http.delete<Users>(environment.apiHost+'/users/'+pid);
   }
}
