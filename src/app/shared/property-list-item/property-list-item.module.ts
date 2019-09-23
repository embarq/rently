import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyListItemComponent } from './property-list-item.component';
import { DirectivesModule } from '../directives/directives.module';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [PropertyListItemComponent],
  exports: [PropertyListItemComponent],
  imports: [
    CommonModule,
    DirectivesModule,
    RouterModule,
    PipesModule
  ]
})
export class PropertyListItemModule { }
