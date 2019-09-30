import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundImageDirective } from './background-image.directive';
import { HideInUniversalDirective } from './hide-in-universal.directive';

const declarations = [
  BackgroundImageDirective,
  HideInUniversalDirective
];

@NgModule({
  declarations: [ ...declarations ],
  exports: [ ...declarations ],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
