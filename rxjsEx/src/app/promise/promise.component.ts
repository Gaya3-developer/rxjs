import { Component } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent {
myFunction(){
  console.log("clicked")
}
DellAvailable(){
  return false;
}
HpAvailable(){
  return false;
}
dell ={
  brand:"dell",
  harDisk:"2 TB",
  color:"black"
}
hp ={
  brand:"hp",
  harDisk:"1 TB",
  color:"silver"
}
notAvailable={
  brand:"Not availabe",
  status:"Failed"
}
ngOnInit():void{
  let byLaptop= new Promise((resolve,reject)=>{
//resolve("Promise is resolved")
//reject("Promise is rejected")
if(this.DellAvailable()){
   setTimeout(() =>{
  //  resolve("dell available")
  resolve(this.dell)
  }
  ,3000)
  
}
else if(this.HpAvailable()){
  setTimeout(() =>{
    resolve("hp available")
  }
  ,3000)
  
 
}
else{
  reject("No laptop available")
}
  })
  byLaptop.then(res =>{
   // console.log("success")
   console.log("then code =>",res)
  }
    )  .catch(err =>{
      console.log("reject code =>",err)
    })
}

}
