import { Component } from '@angular/core';
import { AppServicesService } from 'src/app/appServices/app-services.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent {
  userName;
  constructor(private appService : AppServicesService){}
  ngOnInit():void{
    this.appService.exclusive.next(true)
    this.appService.userName.subscribe(res=>{
      this.userName = res;
          })
  }
  ngOnDestroy(){
    this.appService.exclusive.next(false)

  }
}
