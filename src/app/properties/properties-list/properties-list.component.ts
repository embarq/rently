import { Component, OnInit, Input } from '@angular/core';

import { Property } from 'src/app/core-model/properties';

@Component({
  selector: 'rty-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.scss']
})
export class PropertiesListComponent implements OnInit {
  @Input() properties: Property[];

  constructor() { }

  ngOnInit() {
  }

}
