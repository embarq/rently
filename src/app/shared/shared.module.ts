import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconParamComponent } from './icon-param/icon-param.component';

@NgModule({
  declarations: [IconParamComponent],
  imports: [
    CommonModule
  ],
  exports: [IconParamComponent]
})
export class SharedModule { }
