import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {


  blogName : string;
  blogDescription : string;
  blogImage : string;

  constructor() { }

  ngOnInit() {
  }

  //USE object destructuring
getFirstPost(post){

  this.blogName =  post.heading;
  this.blogDescription = post.description;
  this.blogImage = post.img;

}
}
