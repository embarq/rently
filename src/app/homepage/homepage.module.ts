import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { HomepageResolverService } from './homepage-resolver.service';
import { PropertyCardModule } from '../shared/property-card/property-card.module';
import { DirectivesModule } from '../shared/directives/directives.module';


@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    DirectivesModule,
    PropertyCardModule
  ],
  providers: [
    HomepageResolverService
  ]
})
export class HomepageModule { }
