import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { Property } from 'src/app/core-model/properties';
import { PropertiesDisplayLayout } from '../properties-vm';

@Component({
  selector: 'rty-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertiesListComponent implements OnInit {
  @Input() properties: Property[];
  @Input() layout: PropertiesDisplayLayout = 'grid';

  constructor() { }

  ngOnInit() {
  }

}
