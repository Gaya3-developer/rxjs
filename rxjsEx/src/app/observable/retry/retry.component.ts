import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {  retry, delay, retryWhen, scan } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent {
constructor(private http:HttpClient){

}
post;
fetching:boolean=false;
status= ' No data'
ngOnInit():void{
}
fetchDetails(){
  this.fetching =true;
  this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
    //retry(4)
    retryWhen(err => err.pipe(
      delay(1000),
      scan((retryCount) =>{
if(retryCount >= 5){
 throw err;
}
else{
  retryCount++;
  return retryCount;
}
      },0)
    ))
  ).subscribe((res)=>{
    this.post =res[0];
    this.fetching=false;
    this.status = 'data fetched'
  },
  (err)=>{
    console.log(err)
    this.fetching=false;
    this.status = 'problem fetching data'
  }

  )
}
}
