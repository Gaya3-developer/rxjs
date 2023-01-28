import { Component } from '@angular/core';
import { from, map, mergeAll, mergeMap, of} from 'rxjs';
import { AppServicesService } from 'src/app/appServices/app-services.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent {
  constructor(private appService : AppServicesService){
  }
  getData(data){
return of(data + ' vedio uploaded')
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
    mergeAll()
   ).subscribe(res=>{
    this.appService.print(res,'elContainer1')
   })

   //ex o3
   source.pipe(
   mergeMap(res=>this.getData(res))
   ).subscribe(res=>{
    this.appService.print(res,'elContainer2')
   })
}
}
