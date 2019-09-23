import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComposePropAddressPipe } from './compose-prop-address.pipe';
import { IsEmptyPipe } from './is-empty.pipe';

const declarations = [
  ComposePropAddressPipe,
  IsEmptyPipe
];

@NgModule({
  declarations: [...declarations],
  exports: [...declarations],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
