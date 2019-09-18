import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinglePropertyRoutingModule } from './single-property-routing.module';
import { SinglePropertyPageComponent } from './single-property-page/single-property-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SinglePropertyPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SinglePropertyRoutingModule
  ]
})
export class SinglePropertyModule { }
