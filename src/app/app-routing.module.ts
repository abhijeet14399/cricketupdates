import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpcomingComponent } from './upcoming/upcoming.component';

const routes: Routes = [
  {path:"upcomingmatches",component:UpcomingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
