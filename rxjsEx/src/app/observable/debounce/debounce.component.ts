import { Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.scss']
})
export class DebounceComponent {
@ViewChild('myInput') myInput:ElementRef;
@ViewChild('myInput1') myInput1:ElementRef;
reqData;
resData;
ngOnInit():void{

}
ngAfterViewInit(){
  const searchTerm = fromEvent<any>(this.myInput.nativeElement,'keyup').pipe(
    map(event => event.target.value),
    debounceTime(1000)
  )
  searchTerm.subscribe(res =>{
    this.reqData =res;
    setTimeout(()=>{
this.reqData = null;
    },1000)
  })

  const searchTerm1 = fromEvent<any>(this.myInput1.nativeElement,'keyup').pipe(
    map(event => event.target.value),
    debounceTime(1000),
    distinctUntilChanged()
  )
  searchTerm1.subscribe(res =>{
    this.resData =res;
    setTimeout(()=>{
      this.resData = null;
          },1000)
  })
}
}
