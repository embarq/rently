import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng5SliderModule } from 'ng5-slider';

import { PropertiesRoutingModule } from './properties-routing.module';
import { PropertiesComponent } from './properties.component';
import { DirectivesModule } from '../shared/directives/directives.module';
import { PropertyCardModule } from '../shared/property-card/property-card.module';
import { PropertiesListComponent } from './properties-list/properties-list.component';
import { PropertiesFiltersComponent } from './properties-filters/properties-filters.component';

@NgModule({
  declarations: [PropertiesComponent, PropertiesListComponent, PropertiesFiltersComponent],
  imports: [
    CommonModule,
    DirectivesModule,
    Ng5SliderModule,
    PropertyCardModule,
    PropertiesRoutingModule,
  ]
})
export class PropertiesModule { }
