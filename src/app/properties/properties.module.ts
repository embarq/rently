import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertiesRoutingModule } from './properties-routing.module';
import { PropertiesComponent } from './properties.component';
import { DirectivesModule } from '../shared/directives/directives.module';
import { PropertyCardModule } from '../shared/property-card/property-card.module';



@NgModule({
  declarations: [PropertiesComponent],
  imports: [
    CommonModule,
    DirectivesModule,
    PropertyCardModule,
    PropertiesRoutingModule
  ]
})
export class PropertiesModule { }
