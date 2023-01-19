import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServicesService {

  constructor() { }
  print(val:string, containerId:string){
    let li = document.createElement('li')
    li.innerHTML = val
    document.getElementById(containerId)?.appendChild(li);
   }
  
}
