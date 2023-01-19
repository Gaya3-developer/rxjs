import { Component } from '@angular/core';
import { from, interval,take, takeLast,timer, map, takeUntil, fromEvent} from 'rxjs';
import { AppServicesService } from 'src/app/appServices/app-services.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent {
  arr = ['anup','anil','ashwin','sharma','shekar','sharan']
  constructor(private appService : AppServicesService){}
ngOnInit():void{
  //const source = interval(1000)
  const names = from(this.arr);
  names.pipe(
    take(5)
  ).subscribe(res=>{
   this.appService.print(res,"elContainer")
  })

 
  names.pipe(
    takeLast(5)
  ).subscribe(res=>{
   this.appService.print(res,"elContainer1")
  })


   //ex 3

   const mainSource = interval(1000);
   const condition1 = timer(5000);
   const condition2 = fromEvent(document,'click')
   mainSource.pipe(
  map(res => 'number ' + res),
  //takeUntil(condition1)
  takeUntil(condition2)
   ).subscribe(res =>
   {
    this.appService.print(res,"elContainer2")
   })
 }

}
