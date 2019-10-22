import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage.component';
import { HomepageResolverService } from './homepage-resolver.service';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    resolve: {
      values: HomepageResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
