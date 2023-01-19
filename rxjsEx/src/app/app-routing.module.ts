import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './observable/all/all.component';
import { CustomObservableComponent } from './observable/custom-observable/custom-observable.component';
import { FilterComponent } from './observable/filter/filter.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { MapComponent } from './observable/map/map.component';
import { ObservableComponent } from './observable/observable.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { ToarrayComponent } from './observable/toarray/toarray.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [{
  path:"promises", component:PromiseComponent
},
{
  path:"observables", component:ObservableComponent, children:[
    {path:"",component:AllComponent},
    {path:"fromEvent",component:FromEventComponent},
    {path:"interval",component:IntervalComponent},
    {path:"of-from",component:OfFromComponent},
    {path:"to-array",component:ToarrayComponent},
    {path:"custom-observable",component:CustomObservableComponent},
    {path:"map",component:MapComponent},
    {path:"pluck",component:PluckComponent},
    {path:"filter",component:FilterComponent}
  ]
},
{path:"**", redirectTo:"promises"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
