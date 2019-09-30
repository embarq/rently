import { Component, OnInit, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import * as isEmpty from 'lodash/isEmpty';

@Component({
  selector: 'rty-icon-param',
  templateUrl: './icon-param.component.html',
  styleUrls: ['./icon-param.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class IconParamComponent implements OnInit {
  @Input() label: string;
  @Input() value: any;
  @Input() icon: string;

  hasValue: boolean;

  constructor() { }

  ngOnInit() {
    this.hasValue = !(Number.isNaN(this.value) || isEmpty(this.value + ''));
  }

}
