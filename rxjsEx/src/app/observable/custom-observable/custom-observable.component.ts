import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { observable, Observable } from 'rxjs';
import { AppServicesService } from '../../appServices/app-services.service';
@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss']
})
export class CustomObservableComponent {
  techStatus;
  techStatus1;
  names;
  namesStatus;
  subscrption2:Subscription;
  constructor(private appService : AppServicesService){}
ngOnInit():void{
  //Ex 1 :manual

  const ob1 = Observable.create(observer => {
   
    setTimeout(()=>{
      observer.next('angular')
    },1000)
    setTimeout(()=>{
      observer.next('html css')
    },2000)
    setTimeout(()=>{
      observer.next('react')
     
    observer.error(new Error('limit exceed'))
    },3000)
    setTimeout(()=>{
      observer.next('javascript')
    },4000)
    setTimeout(()=>{
      observer.next('jquery')
   //   observer.complete()
     
    },5000)
  })
  ob1.subscribe(res =>{
    this.appService.print(res,'elContainer')
  },
  (err) => {
    this.techStatus = 'error'
  },
  () =>{
    this.techStatus = 'completed'
  }
    )


    //ex 02 custom interval
const arr = ['angular','typescript','javascript','react','html','css']
    const ob2= Observable.create(observer =>{
      let count=1;
setInterval(()=>{
  observer.next(arr[count])
  if(count >= 5){
    observer.complete()
  }
  count++;
},1000)
    })

   this.subscrption2 = ob2.subscribe((res)=>{
    this.appService.print(res,'elContainer1')
    },  (err) => {
      this.techStatus1 = 'error'
    },
    () =>{
      this.techStatus1 = 'completed'
    }
    )

   //ex 03 random names 
   const arr1 = ['Anup','Shekar','Sharma','gayathri','john','ashwin']
   const ob3= Observable.create(observer =>{
     let count=1;
setInterval(()=>{
 observer.next(arr1[count])
 if(count >= 5){
   observer.error()
 }
 count++;
},1000)
   })

   ob3.subscribe((res) =>{
   this.names=res
   },(err)=>{
    this.namesStatus='error';
   },()=>{
    this.namesStatus='completed';
   })
}
ngOnDestroy(){
  this.subscrption2.unsubscribe()
}
}
