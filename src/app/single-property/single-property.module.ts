import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinglePropertyRoutingModule } from './single-property-routing.module';
import { SinglePropertyPageComponent } from './single-property-page/single-property-page.component';
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../shared/pipes/pipes.module';
import { DirectivesModule } from '../shared/directives/directives.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';


@NgModule({
  declarations: [
    SinglePropertyPageComponent
  ],
  entryComponents: [
    SinglePropertyPageComponent
  ],
  imports: [
    CommonModule,
    SinglePropertyRoutingModule,
    PipesModule,
    DirectivesModule,
    SharedModule,
    LazyLoadImageModule
  ]
})
export class SinglePropertyModule { }
