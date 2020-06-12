import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MapdataComponent} from './component/mapdata/mapdata.component';
import {MapComponent} from './component/map/map.component';


const routes: Routes = [
  { path: 'mapWithData', component: MapdataComponent },
  { path: 'map', component: MapComponent},
  { path: '', component: MapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
