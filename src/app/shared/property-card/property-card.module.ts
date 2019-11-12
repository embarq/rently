import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent } from './property-card.component';
import { DirectivesModule } from '../directives/directives.module';
import { PipesModule } from '../pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [PropertyCardComponent],
  exports: [PropertyCardComponent],
  imports: [
    CommonModule,
    DirectivesModule,
    RouterModule,
    PipesModule,
    LazyLoadImageModule
  ]
})
export class PropertyCardModule { }
