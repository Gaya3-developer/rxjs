import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { AppServicesService } from 'src/app/appServices/app-services.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit{
  constructor(private appService : AppServicesService){}
 @ViewChild('addBtn') addBtn!:ElementRef;

 ngOnInit():void{

 }
 ngAfterViewInit(){
  let count = 1;
  fromEvent(this.addBtn.nativeElement,'click').subscribe(res =>
    {
      let data = "video "+count++
      this.appService.print(data, "elContainer");
      this.appService.print(data, "elContainer1");
    })
 }

}
