import { Component } from '@angular/core';
import { from, of } from 'rxjs';
import { AppServicesService } from 'src/app/appServices/app-services.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent {
  obsMsg;
  constructor(private appService : AppServicesService){}
  ngOnInit():void{
    //of - arguments
    const obs1= of('anup','shekar','sharma');
    obs1.subscribe(res => {
     this.appService.print(res,"elContainer")
    })

    //of objects
    const obs2= of({a:'anup',b:'shekar',c:'sharma'});
    obs2.subscribe((res) => {
      this.obsMsg = res;
    })

    //from array
    const obs3= from(['anup','shekar','sharma']);
    obs3.subscribe((res) => {
      this.appService.print(res,"elContainer1")
    })

        //from promise
        const promise = new Promise((resolve)=>
        {
          setTimeout(()=>{
            resolve("promise resolved")
          },3000)
        })
        const obs4= from(promise);
        obs4.subscribe((res:any) => {
          this.appService.print(res,"elContainer2")
        })

        //from string

        const obs5= from("welcome, Hello world");
        obs5.subscribe((res:any) => {
          this.appService.print(res,"elContainer3")
        })


  }


}
