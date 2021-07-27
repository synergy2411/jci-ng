import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { from, fromEvent } from 'rxjs';
import { auditTime, debounceTime, filter, map, mergeAll, sampleTime, scan, switchAll, switchMap, takeUntil, takeWhile, throttleTime } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax'

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {
  @ViewChild("btn", {static : true}) btnElement : ElementRef<HTMLButtonElement>;

  username = new FormControl('');
  theForm : FormGroup;

  constructor(private fb:  FormBuilder){
    this.theForm  = this.fb.group({
      username : this.username
    })
  }

  ngOnInit(){

    // switchMap
    this.username.valueChanges.pipe(
      debounceTime(2000),
      filter(val => val ? true : false),
      switchMap(val => {
        return ajax.getJSON(`https://api.github.com/users/${val}/repos`)
      })
    ).subscribe(console.log)

    // flattening
    // this.username.valueChanges.pipe(
    //   debounceTime(2000),
    //   map(value => {
    //     return ajax.getJSON(`https://api.github.com/users/${value}`)
    //   }),
    //   mergeAll()
    // ).subscribe(console.log)


    // debounceTime
    // this.username.valueChanges.pipe(
      // debounceTime(2000)
      // throttleTime(2000)
      // sampleTime(2000)
    //   auditTime(2000)
    // ).subscribe(console.log)

    // takeUntil
    // const abort$ = fromEvent(this.btnElement.nativeElement, "click")
    // this.username.valueChanges.pipe(
    //   takeUntil(abort$)
    // ).subscribe(console.log)



    // takeWhile
    // this.username.valueChanges.pipe(
    //   takeWhile(value => {
    //     console.log(value.includes("john"))
    //     return !value.includes("john");
    //   })
    // ).subscribe(console.log)







    // reduce | scan
    // const users = [
    //   {email : "test1@test.com", age: 32},
    //   {email : "test1@test.com", age: 33},
    //   {email : "test3@test.com", age: 34},
    // ]
    // const source = from(users);
    // source.pipe(
    //   scan((acc, curr) =>{
    //     console.log(acc, curr)
    //     return {
    //       ...acc, ...curr
    //     }
    //   },{})
    // ).subscribe(console.log)


    // const numbers = [1,2,3,4,5]
    // const source = from(numbers)
    // const reduceSource = source.pipe(
    //   reduce((acc, curr) =>{
    //     return acc+curr
    //   },0)
    // )

    // reduceSource.subscribe(console.log);






    // const users = [
    //   {email : "test1@test.com", age: 32},
    //   {email : "test1@test.com", age: 33},
    //   {email : "test3@test.com", age: 34},
    // ]

    // const source = from(users)
    // source.pipe(
    //   pluck("age"),
    //   filter(age => age > 33),
    //   // map(user => user.email),
    //   distinct()
    // ).subscribe(console.log)


    // timer
    // const source = timer(0, 3000)
    // source.subscribe(console.log)


    // range
    // const soucre = range(1,5)
    // soucre.pipe(
    //   filter(val => val > 3)
    // ).subscribe(console.log)

    // fromEvent
    // const source = fromEvent(document, "click")
    // source.subscribe(console.log)

    // from
    // const numbers = [2,3,4,5,6]
    // const source = from(numbers)
    // source.subscribe(console.log)


    // of
    // const source = of(1,2,3,4,5,6,7)
    // source.subscribe(console.log)

    // Interval
    // const source = interval(1000)
    // source.pipe(
    //   take(5)
    // ).subscribe(console.log)







    // console.log("Start")      //1
    // const obs$ = new Observable((observer) => {
    //   const promise =  new Promise((resolve, reject) => {
    //     resolve({message : "SUCCESS"})
    //   })

    //   promise.then(response => {
    //     observer.next(response)
    //   })
    //   // observer.next(promise);

    // })

    // obs$.subscribe({
    //   next : (pkg) => console.log(pkg),
    //   error : err => console.error(err),
    //   complete : () => console.log("COMPLETED")
    // })
    // console.log("End")      // 2
  }
}
