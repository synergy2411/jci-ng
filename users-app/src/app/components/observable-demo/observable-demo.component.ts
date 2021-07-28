import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AsyncSubject, BehaviorSubject, combineLatest, forkJoin, from, fromEvent, interval, of, ReplaySubject, Subject, throwError, timer } from 'rxjs';
import { auditTime, catchError, concatMap, debounceTime, endWith, exhaustMap, filter, map, mapTo, mergeAll, mergeMap, mergeMapTo, multicast, refCount, retryWhen, sampleTime, scan, share, shareReplay, startWith, switchAll, switchMap, take, takeUntil, takeWhile, tap, throttleTime } from 'rxjs/operators';
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
  urls : [{name : string}]= [{name: ""}]

  constructor(private fb:  FormBuilder){
    this.theForm  = this.fb.group({
      username : this.username
    })
  }

  customRetry({totalAttempts = 3, scalingDuration = 1000}={}){
    return function(source){
      return source.pipe(
        retryWhen(attemps => {
        return attemps.pipe(
          mergeMap((err, i) => {
            const numberOfAttemps = i + 1;
            if(numberOfAttemps > totalAttempts || [404,500].find(e=> e ===err.status)){
              console.log("Giving up!")
              return throwError(err)
            }
            console.log(`Attempt ${numberOfAttemps} : retrying in ${numberOfAttemps*scalingDuration}ms`)
            return timer(scalingDuration * i)
          })
        )
      })
    )}
  }

  ngOnInit(){


    const click$ = fromEvent(this.btnElement.nativeElement, "click")
    const ajx = ajax("https://api.github.com/users/synergy2411")
    const sharedReplay$ = click$.pipe(
      mergeMapTo(ajx),
      shareReplay(1)
    )

    const subOne = sharedReplay$.subscribe(console.log)

    setTimeout(() => {
      const subTwo = sharedReplay$.subscribe(console.log)
    }, 3000)

    // const interval$ = interval(2000).pipe(
    //   take(5),
    //   tap(val => {console.log("New Interval - ", val)})
    //   )

    //   const sharedInterval$ = interval$.pipe(
    //     share(),
    //     // shareReplay(2)
    //   )
    //   sharedInterval$.subscribe(console.log)

    //   setTimeout(()=>{
    //     sharedInterval$.subscribe(console.log)
    //   }, 3000)




    // Subject - both observable and observer - (pipe, subscribe, next, error, complete)

    // Async Subject
    // const subject = new AsyncSubject();
    // subject.subscribe(console.log)

    // subject.next("Hello")
    // subject.next("World")
    // subject.next("Goodbye")

    // subject.complete()

    // REPLAY SUBJECT
    // const subject = new ReplaySubject(2);
    // subject.next("Hello 1")
    // subject.next("Hello 2")
    // subject.next("Hello 3")
    // subject.subscribe(console.log)
    // subject.next("World")
    // subject.subscribe(console.log)
    // subject.next("Goodbye")

    // const sub = new Subject()
    // const sub = new BehaviorSubject("Hello")
    // // Future subscription will receive last value
    // // sub.next()
    // const subOne = sub.subscribe(console.log)
    // // sub.next("World")
    // const subTwo = sub.subscribe(console.log)
    // sub.next("GoodBye")

    // setTimeout(() => {
    //   console.log("Subscribing!")
    //   const subThree = sub.subscribe(console.log)
    // }, 3000)


    // Exponential Backoff
    // const click$ = fromEvent(document, "click")
    // click$.pipe(
    //   mergeMapTo(
    //     throwError({status : 400, message : "SERVER ERROR"}).pipe(
    //       this.customRetry({totalAttempts : 4, scalingDuration : 2000}),
    //       catchError(err => of(err.message))
    //     )

    //     )
    // ).subscribe(console.log)

    // combineLatest
    // const interval1$ = interval(1000).pipe(take(4)) // [0,1,2,3]
    // const interval2$ = interval(2000).pipe(take(4)) // [0,1,2,3]
    // // combineLatest([interval1$, interval2$])
    // forkJoin({interval1$, interval2$})    // {}
    //   .subscribe(console.log)

      // [00], [11]

    // startWith | endWith
    // interval(1000).pipe(
    //   mapTo(-1),
    //   scan((acc, curr)=>acc+curr, 4),
    //   takeWhile(val=>val!==0),
    //   startWith("Ready...."),
    //   endWith("Mission completed!")
    // ).subscribe(console.log)

    // typeahead suggestion
    // this.username.valueChanges.pipe(
    //   debounceTime(2000),
    //   switchMap(serchTerm => {
    //     return ajax.getJSON(`https://api.github.com/users/${serchTerm}/repos`)
    //   })
    // ).subscribe((urls : [{name}]) => this.urls = urls)
    // ).subscribe(console.log)

//  MergeMap
    // const source = fromEvent(this.btnElement.nativeElement, "click")
    // const interval$ = interval(1000).pipe(take(4))
    // source.pipe(
    //   // switchMap(val => interval$)
    //   // concatMap(val => interval$)
    //   exhaustMap(val => interval$)
    // ).subscribe(console.log)


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
