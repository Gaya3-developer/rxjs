import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppServicesService } from 'src/app/appServices/app-services.service';

@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.scss']
})
export class ReplayComponent {
user1List=['angular 1',
'angular 2']
user2List=[]
user3List=[]
subMode1:boolean=false;
subMode2:boolean=false;

sub2:Subscription;
sub3:Subscription;

methodInterval:boolean=false;
constructor(private appService : AppServicesService){
  this.appService.vedioemit.subscribe(res=>{
this.user1List.push(res)
  })
}
onAdd(vedio){
this.appService.vedioemit.next(vedio.value)
}
user2subscribe(){
  if(this.subMode1){
    this.sub2.unsubscribe();
  }
  else{
    this.sub2 = this.appService.vedioemit.subscribe(res=>{
      this.user2List.push(res)
        })
  }

  this.subMode1 =!this.subMode1
}
user3subscribe(){
  if(this.subMode2){
    this.sub3.unsubscribe();
  }
  else{
    this.sub3 = this.appService.vedioemit.subscribe(res=>{
      this.user3List.push(res)
        })
  }

  this.subMode2 =!this.subMode2
}
toggleMethod(){
this.methodInterval=!this.methodInterval
}
}
