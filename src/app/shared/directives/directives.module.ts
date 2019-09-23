import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundImageDirective } from './background-image.directive';

const declarations = [
  BackgroundImageDirective
];

@NgModule({
  declarations: [ ...declarations ],
  exports: [ ...declarations ],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
