import { Component } from '@angular/core';
import { interval,Subscription,timer } from 'rxjs';
import { AppServicesService } from '../../appServices/app-services.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent {
  obsMsg;
  vedioSubscription:Subscription;
  constructor(private appService : AppServicesService){}
  ngOnInit():void{
    ///const broadcastingVedio = interval(2000);
    const broadcastingVedio= timer(5000, 2000);
    this.vedioSubscription = broadcastingVedio.subscribe(res => 
      {
        console.log(res)
        this.obsMsg = "vedio" + res
        this.appService.print(this.obsMsg,"elContainer1")
        this.appService.print(this.obsMsg,"elContainer2")
        this.appService.print(this.obsMsg,"elContainer3")
        if(res >= 5){
          this.vedioSubscription.unsubscribe()
        }
      }
      )
  }

}
