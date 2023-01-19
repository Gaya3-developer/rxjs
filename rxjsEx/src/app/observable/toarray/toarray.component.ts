import { Component } from '@angular/core';
import { from, of, Subscription, take, toArray } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-toarray',
  templateUrl: './toarray.component.html',
  styleUrls: ['./toarray.component.scss']
})
export class ToarrayComponent {
  user = [{name:'anup', skill:'html,js'},
  {name:'shekar', skill:'angular'},
  {name:'sharma', skill:'react'}]
  sourceSubscription : Subscription;
ngOnInit():void{

  //Ex 01
  const source2 = from(this.user)
source2.pipe(
    toArray()
  ).subscribe(res =>
    {
      console.log(res)
     
    })

    //Ex 02
    const source = interval(1000)
    this.sourceSubscription = source.pipe(
      take(5),
      toArray()
    ).subscribe(res =>
      {
        console.log(res)
       
      })

      //ex 03

        //Ex 01
  const source3 = of('anup', 'shekar', 'shrma')
  source3.pipe(
      toArray()
    ).subscribe(res =>
      {
        console.log(res)
       
      })

}


}
