import { Component } from '@angular/core';
import { of, from, map, mergeAll, mergeMap, switchAll, delay, switchMap } from 'rxjs';
import { AppServicesService } from 'src/app/appServices/app-services.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent {
  constructor(private appService : AppServicesService){
  }
  getData(data){
return of(data + ' vedio uploaded').pipe(
  delay(1000)
)
  } 
ngOnInit():void{

   const source = from(['tech','comedy','news'])
   source.pipe(
    map(res=>this.getData(res))
   ).subscribe(res=>{
   res.subscribe(res2 =>{
console.log(res2)
this.appService.print(res2,'elContainer')
   })
   })

   //ex 2

   source.pipe(
    map(res=>this.getData(res)),
    switchAll()
   ).subscribe(res=>{
    this.appService.print(res,'elContainer1')
   })

   //ex o3
   source.pipe(
   switchMap(res=>this.getData(res))
   ).subscribe(res=>{
    this.appService.print(res,'elContainer2')
   })
}
}
