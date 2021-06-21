import { Component, OnInit } from '@angular/core';
import { MypostsService } from '../_services/myposts.service';



@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.component.html',
  styleUrls: ['./myposts.component.css']
})
export class MypostsComponent implements OnInit {
  posts:any;
  constructor(private postService:MypostsService) { }

  ngOnInit() {
   /*  this.http.get(environment.apiHost+'/posts').subscribe(data=>
      {
      this.posts = data;
      console.log(this.posts);
      }); */
      this.postService.getPOsts().subscribe({
        next:data=>{
          this.posts = data
        },
        error:error=>{
          console.log(error);
          if(error.status===404){
            alert("Please check API EndPoint");
            
            // Or simply this:
            //this.pushNotification.show('And that too!');
            
          }
        }
      });
  }

  createPost(){
    let postObj  = {
      title:'Accenture',
      body:'Avensys',
      userId:1
    }

    this.postService.createPost(postObj).subscribe(data=>{
      console.log(data);
    })

  }

  updatePost(){
    let updateObj  = {
      id:1,
      title:'Accenture',
      body:'Avensys',
      userId:1
    }

    let updateUserObj  = {
      id:1,
      firstname:'Thiekshana Hasintha',
      lastname:'Soysa',
      email:'actmasters@gmail.com'
    }

    

    this.postService.updatePost(updateUserObj.id,updateUserObj).subscribe(data=>{
      console.log(data);
    })
  }

  trackByFn(index){
    return index;
  }

}
