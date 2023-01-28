import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { exhaustMap, tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.scss']
})
export class ExhaustMapComponent {

  ngOnInit():void{

const firstInterval = interval(1000).pipe(take(10));
const secondInterval = interval(1000).pipe(take(2));

firstInterval
.pipe(
  exhaustMap(f => {
    console.log(`Emission Corrected of first interval: ${f}`);
    return secondInterval;
  })
).subscribe(s => console.log(s));
  }
}
