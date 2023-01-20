import { Component } from '@angular/core';
import { AppServicesService } from 'src/app/appServices/app-services.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component {
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
