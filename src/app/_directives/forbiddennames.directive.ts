import { Directive, ElementRef, OnInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appForbiddennames]'
})
export class ForbiddennamesDirective implements OnInit {

  @Input() defaultValue: any;
  constructor(private eRef:ElementRef) { }

  ngOnInit(){

  }

  @HostListener('keyup') onkeyup(){
    if(this.eRef.nativeElement.value==='admin'){
      this.eRef.nativeElement.style.backgroundColor = 'red';
    }
    else{
      this.eRef.nativeElement.style.backgroundColor = 'yellow';
    }
  }

}
