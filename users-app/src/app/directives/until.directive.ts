import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUntil]'
})
export class UntilDirective {

  // @Input() appUntil : boolean;

  @Input() set appUntil (condition: boolean){
    if(!condition){
      this.vcRef.createEmbeddedView(this.templateRef)
    }else{
      this.vcRef.remove()
    }
  }

  constructor(
    private templateRef : TemplateRef<any>,
    private vcRef : ViewContainerRef
    ) { }

}
