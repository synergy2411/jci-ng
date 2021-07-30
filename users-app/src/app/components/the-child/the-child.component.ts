import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-child',
  templateUrl: './the-child.component.html',
  styleUrls: ['./the-child.component.css'],
  // changeDetection : ChangeDetectionStrategy.OnPush
})
export class TheChildComponent implements OnInit {

  @Input() user : any;
  status : boolean;
  constructor(private cdRef : ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  onToggleStatus(){
    this.status = !this.status
  }
  onDetech(){
    this.cdRef.detach()
  }
  onAttach(){
    this.cdRef.detectChanges();
  }

}
