import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure : true
})
export class FilterPipe implements PipeTransform {

  transform(
    todoColl: Array<{label: string, status:string}>,
    filteredStatus : string): unknown {

      console.log("[TRANSFORM]")

    let resultArray = [];
    if(filteredStatus==""){
      return todoColl
    }
    for(let todo of todoColl){
      if(todo["status"]===filteredStatus){
        resultArray.push(todo)
      }
    }
    return resultArray
  }

}
