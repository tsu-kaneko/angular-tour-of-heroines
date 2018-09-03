import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroinesComponent} from './heroines/heroines.component';

const routes: Routes = [
  {path: 'heroines', component: HeroinesComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
