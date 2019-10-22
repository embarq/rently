import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyResolver } from './core/property.resolver';
import { NotFoundComponent } from './content/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'properties',
    loadChildren: () => import('./properties/properties.module').then(m => m.PropertiesModule)
  },
  {
    path: 'properties/:id',
    loadChildren: () => import('./single-property/single-property.module').then(m => m.SinglePropertyModule)
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
