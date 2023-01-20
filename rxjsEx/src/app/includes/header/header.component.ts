import { Component } from '@angular/core';
import { AppServicesService } from 'src/app/appServices/app-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
exclusive:boolean = false;
constructor(private appService : AppServicesService){}
ngOnInit():void{
  this.appService.exclusive.subscribe(res=>{
    console.log(res)
    this.exclusive =res;
  })
}
}
