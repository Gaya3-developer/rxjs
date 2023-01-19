import { Component } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { interval,map } from 'rxjs';
import { AppServicesService } from 'src/app/appServices/app-services.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
sub1:Subscription;
sub2:Subscription;
vedio;
datatrans;
constructor(private appService : AppServicesService){}
ngOnInit():void{
  
//ex 01
const broadcastVedio = interval(1000);
this.sub1 = broadcastVedio.pipe(
  map((res)=> 'vedio ' + res)
).subscribe((res)=>{
this.vedio =res;

})

setTimeout(() => {
this.sub1.unsubscribe()
}, 3000);

//ex2

this.sub2 = broadcastVedio.pipe(
  map((res)=> res * 3)
).subscribe((res)=>{
this.datatrans =res;

})

setTimeout(() => {
this.sub2.unsubscribe()
}, 3000);

//ex 03

const members =[{
  id:1, name:"anup"
},
{
  id:2, name:"shekar"
},
{
  id:3, name:"sharma"
},
{
  id:4, name:"gayathri"
}] 

let memObj = from(members)

memObj.pipe(
  map(res => res.name)
).subscribe(res=>{
 this.appService.print(res,"elContainer")
}
  )
}
}



