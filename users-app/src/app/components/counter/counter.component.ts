import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromCounterActions from '../../store/actions/counter.action';
import * as fromResultActions from "../../store/actions/result.action";
import * as fromLoginActions from '../../store/actions/auth.actions';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter : number;
  resultColl : Array<number> = [];
  constructor(private store : Store<any>) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      console.log("[STATE]", state)
      this.counter = state['ctr'].counter
      this.resultColl = state["res"].result
    })
  }

  onIncrement(){
    this.store.dispatch({type : fromCounterActions.INCREMENT})
  }

  onDecrement(){
    this.store.dispatch({type : fromCounterActions.DECREMENT})
  }
  onAdd(num : number){
    this.store.dispatch(new fromCounterActions.AddCounter(num))
  }

  onSubtract(payload : number){
    this.store.dispatch(new fromCounterActions.SubtractCounter(payload))
  }

  onStoreResult(){
    this.store.dispatch(new fromResultActions.StoreResult(this.counter))
  }

  onLogin(){
    this.store.dispatch(new fromLoginActions.LoginStart("eve.holt@reqres.in", "cityslicka"))
  }
}


// ng - Angular rx- Reactive

// store
  // - Result -> reducer | actions
  // - Counter -> reducer | actions
