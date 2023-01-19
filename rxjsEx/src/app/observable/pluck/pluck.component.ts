import { Component } from '@angular/core';
import { from, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent {
  user = [{name:'anup', skill:'html,js',job:{
    role:'fullstack developer',
    exp:'2'
  }},
  {name:'shekar', skill:'angular',job:{
    role:'frontend developer',
    exp:'2'
  }},
  {name:'sharma', skill:'react',
  job:{
    role:'backend developer',
    exp:'2'
  }}]
data;
data1;
  ngOnInit():void{
    from(this.user).pipe(
      pluck('name'),toArray()
    ).subscribe(res=>{
      this.data =res;
    })

    from(this.user).pipe(
      pluck('job','role',),toArray()
    ).subscribe(res=>{
      this.data1 =res;
    })
  }
}
