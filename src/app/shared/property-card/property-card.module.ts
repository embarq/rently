import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent } from './property-card.component';
import { DirectivesModule } from '../directives/directives.module';
import { PipesModule } from '../pipes/pipes.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PropertyCardComponent],
  exports: [PropertyCardComponent],
  imports: [
    CommonModule,
    DirectivesModule,
    RouterModule,
    PipesModule
  ]
})
export class PropertyCardModule { }
