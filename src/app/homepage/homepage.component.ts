import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { isEmpty } from 'lodash-es';

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
    private propertiesService: PropertiesService,
    private activatedRoute: ActivatedRoute
  ) {
    this.featured$ = this.activatedRoute.data.pipe(
      filter(data => !isEmpty(data.featuredProperties)),
      map(data => data.featuredProperties)
    );

    this.areas$ = this.propertiesService.getGroupedByState();
  }

  ngOnInit() {
  }

}
