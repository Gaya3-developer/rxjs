import { Component } from '@angular/core';
import { from,filter, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
dataArr =[{name:'anup', id:1,gender:'male'},
{name:'shekar', id:2,gender:'male'},
{name:'sharma', id:3,gender:'male'},
{name:'gayathri', id:4,gender:'female'},
{name:'savitha', id:5,gender:'female'},
{name:'sujatha', id:6,gender:'female'}]
data;
lengthData;
genderData;
ngOnInit():void{
  const source = from(this.dataArr)

  //ex 1
  source.pipe(
    filter(member => member.name.length>6),
    toArray()
  ).subscribe(
      res=>{
       
        this.lengthData=res;
      
      }
    )
   //ex 2
   source.pipe(
    filter(member => member.gender == 'male'),
    toArray()
  ).subscribe(
      res=>{
       
        this.genderData=res;
      
      }
    )

    //ex 3
    source.pipe(
      filter(member => member.id < 3),
      toArray()
    ).subscribe(
        res=>{
         
          this.data=res;
        
        }
      )
}
}
