import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { pid } from 'process';

@Injectable({
  providedIn: 'root'
})
export class MypostsService {

  posts:any;
  constructor(private http:HttpClient) { }

  
  getPOsts():Observable<any>{
   /*  this.http.get(environment.apiHost+'/posts').subscribe(data=>
      {
      this.posts = data;
      console.log(this.posts);
      }); */
      return this.http.get(environment.apiHost+'/posts');
  }

  getSinglePost(pid):Observable<any>{
    return this.http.get(environment.apiHost+'/posts/'+pid);
  }

  createPost(payload):Observable<any>{
    return this.http.post(environment.apiHost+'/posts', payload);
  }
  
  updatePost(pid,payload):Observable<any>{
    return this.http.put(environment.apiHost+'/posts/'+pid, payload);
  }

}
