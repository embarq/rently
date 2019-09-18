import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyResolver } from './core/property.resolver';


const routes: Routes = [
  {
    path: 'properties/:id',
    loadChildren: () => import('./single-property/single-property.module').then(m => m.SinglePropertyModule),
    resolve: {
      propertyData: PropertyResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
