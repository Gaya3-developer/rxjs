import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './observable/all/all.component';
import { AsyncSubjectComponent } from './observable/async-subject/async-subject.component';
import { CatchErrorComponent } from './observable/catch-error/catch-error.component';
import { ConcatMapComponent } from './observable/concat-map/concat-map.component';
import { ConcatMergeComponent } from './observable/concat-merge/concat-merge.component';
import { CustomObservableComponent } from './observable/custom-observable/custom-observable.component';
import { DebounceComponent } from './observable/debounce/debounce.component';
import { ExhaustMapComponent } from './observable/exhaust-map/exhaust-map.component';
import { FilterComponent } from './observable/filter/filter.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { LatestComponent } from './observable/latest/latest.component';
import { MapComponent } from './observable/map/map.component';
import { MergeMapComponent } from './observable/merge-map/merge-map.component';
import { ObservableComponent } from './observable/observable.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { ReplayComponent } from './observable/replay/replay.component';
import { RetryComponent } from './observable/retry/retry.component';
import { ShareReplayComponent } from './observable/share-replay/share-replay.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { SwitchMapComponent } from './observable/switch-map/switch-map.component';
import { TakeComponent } from './observable/take/take.component';
import { TapComponent } from './observable/tap/tap.component';
import { ToarrayComponent } from './observable/toarray/toarray.component';
import { ZipComponent } from './observable/zip/zip.component';
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
    {path:"filter",component:FilterComponent},
    {path:"tap",component:TapComponent},
    {path:"take",component:TakeComponent},
    {path:"retry",component:RetryComponent},
    {path:"debounce",component:DebounceComponent},
    {path:"concat-map",component:ConcatMapComponent},
    {path:"subject",component:SubjectComponent},
    {path:"replay",component:ReplayComponent},
    {path:"async-subject",component:AsyncSubjectComponent},
    {path:"concat-merge",component:ConcatMergeComponent},
    {path:"merge-map",component:MergeMapComponent},
    {path:"switch-map",component:SwitchMapComponent},
    {path:"exhaust-map",component:ExhaustMapComponent},
    {path:"share-replay",component:ShareReplayComponent},
    {path:"latest",component:LatestComponent},
    {path:"zip",component:ZipComponent},
    {path:"catch-error",component:CatchErrorComponent}
  ]
},
{path:"**", redirectTo:"promises"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
