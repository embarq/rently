import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinglePropertyRoutingModule } from './single-property-routing.module';
import { SinglePropertyPageComponent } from './single-property-page/single-property-page.component';
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../shared/pipes/pipes.module';
import { DirectivesModule } from '../shared/directives/directives.module';


@NgModule({
  declarations: [
    SinglePropertyPageComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    DirectivesModule,
    SharedModule,
    SinglePropertyRoutingModule
  ]
})
export class SinglePropertyModule { }
