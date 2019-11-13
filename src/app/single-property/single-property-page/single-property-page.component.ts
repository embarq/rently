import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, merge } from 'rxjs';

import { Property, PropertyStatsAttribute, PropertyReview, LabeledData } from 'src/app/core-model/properties';
import { map, switchMap, first, mapTo, tap, take, startWith, share } from 'rxjs/operators';
import { PropertiesService } from 'src/app/core/properties.service';

@Component({
  selector: 'rty-single-property-page',
  templateUrl: './single-property-page.component.html',
  styleUrls: ['./single-property-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SinglePropertyPageComponent implements OnInit {
  public data$: Observable<Property>;
  public features$: Observable<LabeledData[]>;
  public records$: Observable<LabeledData[]>;
  public stats$: Observable<PropertyStatsAttribute[]>;
  public reviews$: Observable<PropertyReview[]>;
  public localsFeedbackAvailable$: Observable<boolean>;
  public propertyId$: Observable<Property['id']>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private propertiesService: PropertiesService
  ) {
    this.features$ = null;
    this.records$ = null;
    this.stats$ = null;
    this.reviews$ = null;
    this.localsFeedbackAvailable$ = null;
  }

  ngOnInit() {
    this.propertyId$ = this.activatedRoute.params.pipe(
      map(params => params['id']),
      first()
    );

    this.data$ = this.propertyId$.pipe(
      switchMap((id) => this.propertiesService.getById(id)),
      first(),
      map(data => {
        const prefix = 'https://static.trulia-cdn.com/pictures';
        const picturesCollection = data.picturesCollection.map(entry => {
          return `${ prefix }/${ entry }`;
        });
        return {
          ...data,
          previewBannerImageUrl: `${ prefix }/${ data.previewBannerImageUrl }`,
          preview: picturesCollection[0],
          picturesCollection
        }
      }),
      share()
    );

    this.features$ = this.propertyId$.pipe(
      switchMap(id => this.propertiesService.getFeatures(id))
    );
    this.records$ = this.propertyId$.pipe(
      switchMap(id => this.propertiesService.getRecords(id))
    );
    this.stats$ = this.propertyId$.pipe(
      switchMap(id => this.propertiesService.getPublicStats(id))
    );
    this.reviews$ = this.propertyId$.pipe(
      switchMap(id => this.propertiesService.getReviews(id))
    );

    this.localsFeedbackAvailable$ = merge([this.stats$, this.reviews$]).pipe(
      first(),
      mapTo(true)
    );
  }

}
