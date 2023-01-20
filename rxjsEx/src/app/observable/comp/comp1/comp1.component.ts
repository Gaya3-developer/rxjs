import { Component, ElementRef, ViewChild } from '@angular/core';
import { AppServicesService } from 'src/app/appServices/app-services.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component {
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
