import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-security-demo',
  templateUrl: './security-demo.component.html',
  styleUrls: ['./security-demo.component.css']
})
export class SecurityDemoComponent implements OnInit {

  todoColl = [
    {id : 1, label : "shopping"},
    {id : 2, label : "planting"},
    {id : 3, label : "grocery"},
  ]

  onChange(){
    this.todoColl = [
     {id : 4, label : "insurnace"},
    {id : 2, label : "planting"},
    {id : 3, label : "grocery"},
    ]
  }

  identify(index, item){
    return item.id
  }
  htmlSnippets = "<script>alert('Hello World')</script>"
  hello = "<h1>Hello World</h1>"

  dangerUrl = "javascript:alert('This is an alert!!')"
  safeUrl;
  constructor(private sanitizer : DomSanitizer) { }

  ngOnInit(): void {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerUrl)
    // this.service.subsribe(data => {
    //   this.data = data;
    // })
  }

}
