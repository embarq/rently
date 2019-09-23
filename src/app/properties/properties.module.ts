import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng5SliderModule } from 'ng5-slider';

import { PropertiesRoutingModule } from './properties-routing.module';
import { PropertiesComponent } from './properties.component';
import { DirectivesModule } from '../shared/directives/directives.module';
import { PropertyCardModule } from '../shared/property-card/property-card.module';
import { PropertiesListComponent } from './properties-list/properties-list.component';
import { PropertiesFiltersComponent } from './properties-filters/properties-filters.component';
import { PropertyListItemModule } from '../shared/property-list-item/property-list-item.module';

@NgModule({
  declarations: [
    PropertiesComponent,
    PropertiesListComponent,
    PropertiesFiltersComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    Ng5SliderModule,
    PropertyCardModule,
    PropertyListItemModule,
    PropertiesRoutingModule,
  ]
})
export class PropertiesModule { }
