import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppServicesService } from 'src/app/appServices/app-services.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent {
  user1List=['angular 1',
  'angular 2']
  user2List=[]
  user3List=[]
  subMode1:boolean=false;
  subMode2:boolean=false;
  
  sub2:Subscription;
  sub3:Subscription;
  asyncVedioemit;
  methodInterval:boolean=false;
  constructor(private appService : AppServicesService){
   /* this.appService.vedioemit.subscribe(res=>{
  this.user1List.push(res)
  console.log(res)
    })*/
  }

  ngOnInit():void{
    this.appService.asyncVedioemit.subscribe(res=>{
this.asyncVedioemit =res
    })
  }
  onAdd(vedio){
   console.log(vedio.value)
  this.appService.asyncVedioemit.next(vedio.value)
  }
  onComplete(){
 this.appService.asyncVedioemit.complete()
  }

 
}
