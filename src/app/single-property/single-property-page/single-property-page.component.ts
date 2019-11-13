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
  public neighborhoodStatAttributesMapping: { [id: number]: string };

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

  getAttributeIcon(id) {
    return this.neighborhoodStatAttributesMapping[id];
  }

  ngOnInit() {
    const propertyId$ = this.activatedRoute.params.pipe(
      map(params => params['id']),
      first()
    );

    this.data$ = propertyId$.pipe(
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

    this.features$ = propertyId$.pipe(
      switchMap(id => this.propertiesService.getFeatures(id))
    );
    this.records$ = propertyId$.pipe(
      switchMap(id => this.propertiesService.getRecords(id))
    );
    this.stats$ = propertyId$.pipe(
      switchMap(id => this.propertiesService.getPublicStats(id))
    );
    this.reviews$ = propertyId$.pipe(
      switchMap(id => this.propertiesService.getReviews(id))
    );

    this.localsFeedbackAvailable$ = merge([this.stats$, this.reviews$]).pipe(
      first(),
      mapTo(true)
    );

    this.neighborhoodStatAttributesMapping = {
      1: 'fa-smile',
      2: 'fa-glass-cheers',
      3: 'fa-hourglass',
      4: 'fa-candy-cane',
      5: 'fa-binoculars',
      6: 'fa-headphones-alt',
      7: 'fa-dove',
      8: 'fa-shopping-cart',
      9: 'fa-utensils',
      10: 'fa-parking',
      11: 'fa-car',
      12: 'fa-moon',
      13: 'fa-walking',
      14: 'fa-lightbulb',
      15: 'fa-child',
      16: 'fa-paw',
    };
  }

}
