import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServicesService {
  exclusive = new Subject<boolean>()
  //userName = new Subject<string>()
  userName = new BehaviorSubject<string>('anup')
  vedioemit =new ReplaySubject<string>(3)
  constructor() { }
  print(val:string, containerId:string){
    let li = document.createElement('li')
    li.innerHTML = val
    document.getElementById(containerId)?.appendChild(li);
   }
  
}
