import { Component } from '@angular/core';
import { concatMap, delay } from 'rxjs';
import { concatAll, from, map, mergeAll, mergeMap, of } from 'rxjs';
import { AppServicesService } from 'src/app/appServices/app-services.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent {
  constructor(private appService : AppServicesService){
  }
  getData(data){
return of(data + ' vedio uploaded').pipe(
  delay(2000)
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
    concatAll()
   ).subscribe(res=>{
    this.appService.print(res,'elContainer1')
   })

   //ex o3
   source.pipe(
   concatMap(res=>this.getData(res))
   ).subscribe(res=>{
    this.appService.print(res,'elContainer2')
   })
}
}
