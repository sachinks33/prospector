import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SegmentComponent } from './segment/segment.component';

const routes: Routes = [{path:'segment', component:SegmentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
