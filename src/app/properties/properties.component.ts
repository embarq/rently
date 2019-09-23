import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { Property } from '../core-model/properties';
import { PropertiesService } from '../core/properties.service';

@Component({
  selector: 'rty-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertiesComponent implements OnInit {
  properties$: Observable<Property[]>;

  constructor(
    private propertiesService: PropertiesService
  ) {
    this.properties$ = this.propertiesService.getProperties();
  }

  ngOnInit() {
  }

}
