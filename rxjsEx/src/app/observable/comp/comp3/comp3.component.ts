import { Component } from '@angular/core';
import { AppServicesService } from 'src/app/appServices/app-services.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component {
  userName;
  constructor(private appService : AppServicesService){
    this.appService.userName.subscribe(res=>{
      this.userName = res;
          })
  }

onChange(uname){
this.appService.userName.next(uname.value)
}
}
