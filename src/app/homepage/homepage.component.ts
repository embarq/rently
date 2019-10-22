import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { PropertiesService } from '../core/properties.service';
import { Property } from '../core-model/properties';

@Component({
  selector: 'rty-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomepageComponent implements OnInit {
  featured$: Observable<Property[]>;
  areas$: Observable<object>;

  constructor(
    private propertiesService: PropertiesService
  ) {
    this.featured$ = this.propertiesService.getFeatured();
    this.areas$ = this.propertiesService.getGroupedByState();
  }

  ngOnInit() {
  }

}
