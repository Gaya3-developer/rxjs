import { Component } from '@angular/core';
import { concat, interval, map, merge, take } from 'rxjs';
import { AppServicesService } from 'src/app/appServices/app-services.service';

@Component({
  selector: 'app-concat-merge',
  templateUrl: './concat-merge.component.html',
  styleUrls: ['./concat-merge.component.scss']
})
export class ConcatMergeComponent {
  constructor(private appService : AppServicesService){
   }
ngOnInit():void{
  const sourceTech= interval(1000).pipe(
    map(v =>{
      return 'tech # '+(v+1)
    }),take(5))
    const sourceComedy= interval(1000).pipe(
      map(v =>{
        return 'comedy # '+(v+1)
      }),take(3))
      const sourceNews= interval(1000).pipe(
        map(v =>{
          return 'news # '+(v+1)
        }),take(4))

        const finalObsconcat = concat(sourceComedy,sourceTech,sourceNews)
        finalObsconcat.subscribe(res=>{
    console.log(res)
    this.appService.print(res,'elContainer')
  })
  const finalObsmerge = merge(sourceComedy,sourceTech,sourceNews)
  finalObsmerge.subscribe(res=>{
console.log(res)
this.appService.print(res,'elContainer1')
})
}
}
