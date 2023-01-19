import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { interval,map,tap,timer} from 'rxjs';
import { AppServicesService } from 'src/app/appServices/app-services.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent {
  sub:Subscription;
  sub1:Subscription;
  myColor:string;
  constructor(private appService : AppServicesService){}
ngOnInit():void{
  const source = interval(1000);

  //ex 1
const arr = ['anup','anil','ashwin','sharma','shekar','sharan']
  this.sub = source.pipe(
    tap(res => {
   
     // console.log("tap before",res)
      if(res === 5){
      this.sub.unsubscribe()}
    }
      ),
    map(res => arr[res] ),
  // tap(res => console.log("tap after",res))
  ).subscribe(res => {
   // console.log(res)
    this.appService.print(res,'elContainer')
  })

  //ex 2
  const colors = ['Red','Green','Blue','Pink','Orange','Brown']
 this.sub1 = source.pipe(
    tap(res => {
      this.myColor = colors[res];

      if(res === 3){
        this.sub1.unsubscribe()}
      
    }
      ),
    map(res => colors[res] ),
  ).subscribe(res => {
    console.log(res)
    this.appService.print(res,'elContainer1')
  })

}
}
