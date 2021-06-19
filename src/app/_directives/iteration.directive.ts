import { Directive,TemplateRef,ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appIteration]'
})
export class IterationDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }
  @Input('appIteration') set loop(num:number){
    for(var i=0;i<num;i++){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
}
}
