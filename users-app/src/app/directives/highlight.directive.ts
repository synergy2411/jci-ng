import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
  // selector: '.appHighlight'
})
export class HighlightDirective {

  @HostBinding("style.backgroundColor") bgColor : any;
  @Input() favColor : string;

  @HostListener("mouseenter") onmouseenter(){
    this.bgColor = this.favColor;
  }

  @HostListener("mouseleave") onmouseleave(){
    this.bgColor = "transparent";
  }

  constructor(private elRef : ElementRef) {
    console.log(this.elRef.nativeElement);
  }

}
