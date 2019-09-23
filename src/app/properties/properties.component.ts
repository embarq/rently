import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { Property } from '../core-model/properties';
import { PropertiesService } from '../core/properties.service';
import { filter, first } from 'rxjs/operators';

@Component({
  selector: 'rty-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertiesComponent implements OnInit {
  properties$: Observable<Property[]>;

  constructor(
    private propertiesService: PropertiesService,
    private cdRef: ChangeDetectorRef
  ) {
    this.properties$ = this.propertiesService.getProperties();

    this.properties$.pipe(
      filter(data => data != null),
      first()
    ).subscribe(() => {
      this.cdRef.markForCheck();
    })
  }

  ngOnInit() {
  }

}
