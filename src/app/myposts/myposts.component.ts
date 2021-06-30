import { Component, OnInit } from '@angular/core';
import { fromEvent, of, Subject } from 'rxjs';
import { first, map,takeLast,takeUntil,takeWhile  } from 'rxjs/operators';
import { switchMap,mergeMap, tap, delay } from 'rxjs/operators';
import { MypostsService } from '../_services/myposts.service';


@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.component.html',
  styleUrls: ['./myposts.component.css']
})
export class MypostsComponent implements OnInit {
  posts:any;
  startClick = new Subject<void>();
  constructor(private postService:MypostsService) { }

  count = 0;
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

        const switchMapSample = this.postService.getPOsts().pipe(
        switchMap(posts => {
          return this.postService.getSinglePost(1).pipe(
            delay(1000),
            tap(singlePost => {
              console.log(posts)
              console.log(singlePost)
            })
          )
        })
      )
      switchMapSample.subscribe(r => console.log(r));
 
      const mergeMapSample = this.postService.getPOsts().pipe(
        mergeMap(posts => {
          return this.postService.getSinglePost(1).pipe(
            delay(1000),
            map(singlePost => {
              const allPosts = {singlePost,posts};
              return allPosts;
            })
          )
        })
      )
      mergeMapSample.subscribe(r => console.log(r));

      const sourceforFirstOPerator = fromEvent(document,'click');
      sourceforFirstOPerator.pipe(first()).subscribe(()=>{
        console.log("Document is clicked only once");
      })

      const sourceTakeWhile = fromEvent(document,'click');
      sourceTakeWhile.pipe(takeWhile(()=>this.count<3)).subscribe(()=>{
        console.log("Document is clicked");
        this.count++;
      })

      const sourceTakeLast = of('Angular','ReactJs','VueJs');
      sourceTakeLast.pipe(takeLast(2)).subscribe((r => console.log(r)))

      sourceTakeWhile.pipe(takeUntil(this.startClick)).subscribe(()=>{
        console.log("clicked");
      })

  }

  stopClick(){
    this.startClick.next();
    this.startClick.complete();
  }

  createPost(){
/*     let postObj  = {
      title:'Accenture',
      body:'Avensys',
      userId:1
    }

    this.postService.createPost(postObj).subscribe(data=>{
      console.log(data);
    }) */
      //switchMap

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
