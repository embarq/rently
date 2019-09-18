import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Property } from 'src/app/core-model/properties';
import { map } from 'rxjs/operators';

@Component({
  selector: 'rty-single-property-page',
  templateUrl: './single-property-page.component.html',
  styleUrls: ['./single-property-page.component.scss']
})
export class SinglePropertyPageComponent implements OnInit {
  data$: Observable<Property>;
  neighborhoodStatAttributesMapping;

  constructor(activatedRoute: ActivatedRoute) {
    this.data$ = activatedRoute.data.pipe(
      map(resolved => resolved.propertyData),
      map(data => {
        // 'https://static.trulia-cdn.com/pictures/thumbs_5/zillowstatic/ISrhukqzi1hb5g1000000000.webp'
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
      })
    );

    this.data$.subscribe(console.log);

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
    }
  }

  getAttributeIcon(id) {
    return this.neighborhoodStatAttributesMapping[id];
  }

  ngOnInit() {
  }

}
