import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, BehaviorSubject, of as observableOf } from 'rxjs';
import { switchMapTo, share } from 'rxjs/operators';

import { Property } from '../core-model/properties';
import { PropertiesService } from '../core/properties.service';
import { PropertiesDisplayLayout } from './properties-vm';

@Component({
  selector: 'rty-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertiesComponent implements OnInit {
  properties$: Observable<Property[]>;
  propertiesListLayout$: BehaviorSubject<PropertiesDisplayLayout>;

  constructor(
    private propertiesService: PropertiesService
  ) {
    this.properties$ = observableOf([]).pipe(
      switchMapTo(this.propertiesService.getAll()),
      share()
    );
    this.propertiesListLayout$ = new BehaviorSubject('list');
  }

  ngOnInit() {
  }

  setPropertiesLayout(layout: PropertiesDisplayLayout) {
    this.propertiesListLayout$.next(layout);
  }

}
