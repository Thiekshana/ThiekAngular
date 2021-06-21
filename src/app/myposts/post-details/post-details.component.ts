import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { MypostsService } from 'src/app/_services/myposts.service';



@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  singlePost: any;
  title: string;
  desc: string;
  postId: string;
  constructor(private route: ActivatedRoute, private postService:MypostsService) { 
    console.log(route.snapshot.queryParams);
  }

  ngOnInit() {

    this.postId = this.route.snapshot.paramMap.get('id');

    this.postService.getSinglePost(this.postId).subscribe(data=>{
      this.singlePost = data
    })
    
    //console.log(this.route);
  /*    this.http.get(environment.apiHost+'/posts/'+this.postId).subscribe(data=>{
      this.singlePost = data;
      console.log(this.singlePost); 
    }); 
 */
  }

}
