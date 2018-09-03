import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroinesComponent} from './heroines/heroines.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroineDetailComponent} from './heroine-detail/heroine-detail.component';

const routes: Routes = [
  {path: 'heroines', component: HeroinesComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroineDetailComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
