import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SinglePropertyPageComponent } from './single-property-page/single-property-page.component';


const routes: Routes = [
  {
    path: '',
    component: SinglePropertyPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SinglePropertyRoutingModule { }
